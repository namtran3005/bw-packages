import { TemplateNames } from '@bitwala-cryptobank-squad/package-emails';
import { EmailCommunications } from '..';
import { config } from '../config';
import {
  EmailInterface,
  PrepareEmailInterface,
  SendEmailInterface,
  RawEmailInterfaceWithAttachment,
} from '../types';

describe('Email Communications', () => {
  let instance: Record<string, any>;
  const messageEmail: SendEmailInterface = {
    to: 'alessio@bitwa.la',
    locale: 'bar',
    templateName: TemplateNames.MainSdaImmediateAccountClosure,
    mailEnv: 'foo',
    variables: { firstName: 'bar' },
  };

  beforeEach(() => {
    instance = new EmailCommunications();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Email Communications constructor', () => {
    it('should create a new instance', () => {
      expect(instance).toBeInstanceOf(EmailCommunications);
    });

    it('should set this context', () => {
      const expectedDefualtConfig = {
        email: {
          replyToAddress: `"${process.env.MAIL_SENDER}" <${process.env.MAIL_FROM}>`,
          source: `"${process.env.MAIL_SENDER}" <${process.env.MAIL_FROM}>`,
        },
      };
      const customConfig = {
        replyToAddress: `"${process.env.MAIL_SENDER}" <${process.env.MAIL_FROM}>`,
        source: `"${process.env.MAIL_SENDER}" <${process.env.MAIL_FROM}>`,
      };

      const customConfigInstance: Record<string, any> = new EmailCommunications(
        customConfig
      );

      expect(customConfigInstance.config).toEqual({
        email: customConfig,
      });
      expect(instance.config).toEqual(expectedDefualtConfig);
      expect(instance.SES).toBeInstanceOf(Object);
    });
  });

  describe('Email Communications sendEmail', () => {
    it('should call prepareEmail and call sendEmailAPI', async () => {
      instance.prepareEmail = jest.fn().mockReturnValue({ email: true });
      instance.sendEmailAPI = jest.fn();
      instance.isDeployed = jest.fn().mockReturnValue(true);

      const expectedMessage: PrepareEmailInterface = {
        to: messageEmail.to,
        template: `${messageEmail.templateName}_bar_foo`,
        variables: messageEmail.variables,
      };

      await instance.sendEmail(messageEmail);

      expect(instance.prepareEmail).toHaveBeenCalledWith(expectedMessage);
      expect(instance.isDeployed).toHaveBeenCalled();
      expect(instance.sendEmailAPI).toBeCalledWith({ email: true });
    });
  });

  describe('Email Communications prepareEmail', () => {
    it('returns correct obj', () => {
      const prepareEmailParams: PrepareEmailInterface = {
        to: messageEmail.to,
        template: messageEmail.templateName,
        variables: messageEmail.variables,
      };

      const expectedValue: EmailInterface = {
        Destination: {
          BccAddresses: [],
          CcAddresses: [],
          ToAddresses: [messageEmail.to],
        },
        Source: instance.config.email.source,
        ReplyToAddresses: [instance.config.email.replyToAddress],
        Template: prepareEmailParams.template,
        TemplateData: JSON.stringify(prepareEmailParams.variables),
        ConfigurationSetName: 'Log',
        Tags: [
          {
            Name: 'MessageGroup',
            Value: messageEmail.templateName,
          },
        ],
      };

      const preparedEmail = instance.prepareEmail(prepareEmailParams);

      expect(preparedEmail).toEqual(expectedValue);
    });
  });

  describe('Email Communications sendEmailAPI', () => {
    it('should call sendEmail and log the error', async () => {
      const sendTemplatedEmail = jest.fn((_, cb) => {
        return cb('error');
      });
      instance.SES.sendTemplatedEmail = sendTemplatedEmail;
      instance.log.warn = jest.fn();
      instance.logCommunication = jest.fn();
      const paramEmail: EmailInterface = ({
        hodl: 'always',
      } as unknown) as EmailInterface;
      const expectedErrorEmail = {
        error: true,
        errorDetails: 'error',
        ...paramEmail,
      };

      await expect(instance.sendEmailAPI(paramEmail)).rejects.toEqual(
        new Error('Error while sending the email')
      );

      expect(sendTemplatedEmail).toBeCalled();
      expect(instance.log.warn).toBeCalledWith(
        'Error while sending the email: ',
        'error'
      );
      expect(instance.logCommunication).toBeCalledWith(
        expectedErrorEmail,
        config.communicationMethods.EMAIL,
        false
      );
    });

    it('should call sendEmail', () => {
      const sendTemplatedEmail = jest.fn((_, cb) => {
        return cb(null);
      });
      instance.SES.sendTemplatedEmail = sendTemplatedEmail;
      instance.logCommunication = jest.fn();
      const paramEmail = { hodl: 'always' };

      instance.sendEmailAPI(paramEmail);

      expect(sendTemplatedEmail).toBeCalled();
      expect(instance.logCommunication).toBeCalledWith(
        paramEmail,
        config.communicationMethods.EMAIL
      );
    });
  });

  describe('Email Communications sendRawEmailWithAttachment', () => {
    it('should call sendRawEmail', async () => {
      const sendRawEmail = jest.fn((_, cb) => {
        return cb('error');
      });
      instance.SES.sendRawEmail = sendRawEmail;
      instance.log.warn = jest.fn();
      instance.log.info = jest.fn();
      instance.logCommunication = jest.fn();
      instance.isDeployed = jest.fn().mockReturnValue(true);

      const paramEmail: RawEmailInterfaceWithAttachment = {
        to: 'mockToEmail',
        subject: 'mockSubject',
        from: 'mockFromEmail',
        html: 'mockHtml',
        plaintext: 'mockPlantext',
      };

      await expect(
        instance.sendRawEmailWithAttachment(paramEmail)
      ).rejects.toEqual(new Error('Error while sending the email'));

      expect(sendRawEmail).toBeCalled();
      expect(instance.log.info).toBeCalledWith(
        'Error while sending the email (With Attachment): ',
        'error'
      );
    });
  });
});
