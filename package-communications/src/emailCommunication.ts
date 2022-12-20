import {
  emailSanitizationSchemas,
  TemplateNames,
} from '@bitwala-cryptobank-squad/package-emails';
import * as Sentry from '@sentry/node';
import AWS from 'aws-sdk';
import MailComposer from 'nodemailer/lib/mail-composer';
import { MixedSchema } from 'yup';
import { config } from './config';
import { CommunicationBase, EmailCommunicationsInterface } from './types/';
import {
  BulkDestination as BulkDestinationType,
  BulkEmailData,
  BulkTemplatedEmailsInterface,
  EmailConfigInterface,
  EmailInterface,
  EmailInterfaceWithAttachment,
  InstanceConfig,
  PrepareEmailInterface,
  RawEmailInterfaceSimple,
  RawEmailInterfaceWithAttachment,
  RegionConfigInterface,
  SendEmailInterface,
} from './types/interfaces';

export type BulkDestination = BulkDestinationType;

export class EmailCommunications
  extends CommunicationBase
  implements EmailCommunicationsInterface {
  public SES: AWS.SES;
  private config: InstanceConfig;
  private maxEmailPerBulk: number = 50;

  // On Main, do not use this method directly to send communications out. Use the notifications module instead!
  // Please read the docs in Sending_emails_sms_push_notifications.md
  constructor(customConfig?: EmailConfigInterface | RegionConfigInterface) {
    super('EMAIL_COMMUNICATIONS');
    AWS.config.region = config.awsRegion;

    let emailCustomConfig: EmailConfigInterface | undefined;

    if (customConfig && customConfig.awsRegion) {
      // RegionConfigInterface
      AWS.config.region = customConfig.awsRegion;
    } else if (customConfig && !customConfig.awsRegion) {
      // EmailConfigInterface
      emailCustomConfig = customConfig as EmailConfigInterface;
    }

    this.SES = new AWS.SES();

    this.config = {
      email: {
        ...config.email,
        ...emailCustomConfig,
      },
    };
  }

  public async sendEmail({
    to,
    bccAddress,
    ccAddress,
    userId,
    templateName,
    locale,
    mailEnv,
    variables,
  }: SendEmailInterface): Promise<void | null> {
    // email sanitization
    const schema = emailSanitizationSchemas[templateName];
    try {
      variables = await schema.validate(variables);
    } catch (e) {
      Sentry.withScope((scope) => {
        if (userId) {
          scope.setExtra('owner', userId);
        } else {
          scope.setExtra('emailAddress', to);
        }
        const sentryId = Sentry.captureException(e);
        this.log.error(
          `Sanitization of an email failed with the following error message ${e.message}. SentryID is ${sentryId}, template name is ${templateName}`
        );
      });
    }

    const template = `${templateName}_${locale}_${mailEnv}`;

    const email = this.prepareEmail({
      to,
      ccAddress,
      bccAddress,
      template,
      variables,
    });

    if (!this.isDeployed() && process.env.FORCE_SENDING_EMAIL !== 'true') {
      this.log.info('Preventing email sending: ');
      this.log.info(JSON.stringify(email, null, 2));
      return null;
    }
    return this.sendEmailAPI(email);
  }

  public async sendRawEmailWithAttachment({
    to,
    subject,
    from,
    html,
    plaintext,
    rawMessage,
    attachmentName,
    attachmentContentType,
    attachments,
    ConfigurationSetName,
    Tags
  }: RawEmailInterfaceWithAttachment): Promise<void> {
    const attachmentsData =
      attachments ||
      (rawMessage
        ? [
            {
              filename: attachmentName || 'Attachment',
              content: rawMessage,
              contentType: attachmentContentType || 'application/pdf',
            },
          ]
        : undefined);

    const mail = new MailComposer({
      ...{ from, subject, html, to, text: plaintext },
      ...(attachmentsData && {
        attachments: attachmentsData,
      }),
    });

    const message = await new Promise((resolve, reject) => {
      try {
        mail.compile().build((error, data) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(data);
        });
      } catch (error) {
        reject(error);
      }
    });

    const emailParams: EmailInterfaceWithAttachment = {
      Destinations: [to],
      RawMessage: { Data: message as object },
    };

    if (ConfigurationSetName && Tags) {
      emailParams.ConfigurationSetName = ConfigurationSetName;
      emailParams.Tags = Tags;
    }

    if (!this.isDeployed() && process.env.FORCE_SENDING_EMAIL !== 'true') {
      this.log.info(
        `Preventing email sending to ${to} with subject ${subject} and body: ${html}`
      );
      return;
    }
    return this.sendRawEmailAPI(emailParams);
  }
  public async sendRawEmail({
    to,
    subject,
    from,
    html,
    plaintext,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RawEmailInterfaceSimple): Promise<any> {
    // <- Typescript refuses to accept any other type. Talk to Mr. TS

    const emailParams = {
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: html,
          },
          Text: {
            Charset: 'UTF-8',
            Data: plaintext,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        },
      },
      Source: from,
    };

    if (
      !(
        ['staging', 'production'].includes(process.env.NODE_ENV) ||
        process.env.NODE_ENV.startsWith('playground-')
      ) &&
      process.env.FORCE_SENDING_EMAIL !== 'true'
    ) {
      this.log.info(
        `Preventing email sending to ${to} with subject ${subject} and body: ${html}`
      );
      return;
    }
    return new Promise((resolve, reject) => {
      this.SES.sendEmail(emailParams, (e: AWS.AWSError) => {
        if (e) {
          this.log.info('Error while sending the email: ', e);
          this.logCommunication(
            {
              error: true,
              errorDetails: e,
              ...emailParams,
            },
            config.communicationMethods.EMAIL,
            false
          );
          return reject(new Error('Error while sending the email'));
        }
        this.logCommunication(emailParams, config.communicationMethods.EMAIL);
        resolve();
      });
    });
  }

  public sendBulkTemplateMail({
    destination, // list of the emails with the vars. Can be unlimited, the fn will batch the requests
    templateName,
    locale,
    mailEnv,
  }: BulkTemplatedEmailsInterface): Promise<void> | null {
    const bulkEmail = this.prepareBulkEmail(
      destination,
      templateName,
      locale,
      mailEnv
    );

    if (bulkEmail.length) {
      if (
        ['staging', 'production'].includes(process.env.NODE_ENV) ||
        process.env.NODE_ENV.startsWith('playground-')
      ) {
        bulkEmail.forEach(async (email) => {
          await this.sendBulkEmailAPI(email);
        });
      } else {
        this.log.info('Not sending bulk email, because env not production');
      }
    }

    return null;
  }

  private prepareEmail({
    to,
    bccAddress,
    ccAddress,
    template,
    variables,
  }: PrepareEmailInterface): EmailInterface {
    const email: EmailInterface = {
      Destination: {
        BccAddresses: bccAddress ? bccAddress : [],
        CcAddresses: ccAddress ? ccAddress : [],
        ToAddresses: [to],
      },
      Template: template,
      TemplateData: JSON.stringify(variables),
      Source: this.config.email.source,
      ReplyToAddresses: [this.config.email.replyToAddress],
      ConfigurationSetName: 'Log',
      Tags: [
        {
          Name: 'MessageGroup',
          Value: template,
        },
      ],
    };

    return email;
  }

  public prepareBulkEmail(
    destination: BulkDestination[],
    templateName: TemplateNames,
    locale: string,
    mailEnv: string,
    emailsPerBulk = this.maxEmailPerBulk
  ): BulkEmailData[] {
    const schema: MixedSchema = emailSanitizationSchemas[templateName];
    // Prepares the bulk emails, sanitizes them and splits into chunks
    const emails = [];
    for (const email of destination) {
      try {
        email.variables = schema.validateSync(email.variables);
      } catch (e) {
        Sentry.withScope((scope) => {
          scope.setExtra('email address', email.toAddress);
          scope.setExtra('variables', email.variables);
          const sentryId = Sentry.captureException(e);
          this.log.error(
            `Sanitization of an email to ${email.toAddress} failed with the message ${e.message}. SentryID is ${sentryId}, templateName is ${templateName}`
          );
        });
      }
      emails.push({
        Destination: {
          ToAddresses: [email.toAddress as string],
        },
        ReplacementTemplateData: JSON.stringify(email.variables),
      });
    }

    const chunkedEmails = this.splitIntoChunks(emails, emailsPerBulk);
    const template = `${templateName}_${locale}_${mailEnv}`;
    const batchedReqs = chunkedEmails.map((email) => ({
      DefaultTemplateData: '{"firstName":"User"}',
      Destinations: email,
      Template: template,
      Source: this.config.email.source,
    }));

    return batchedReqs;
  }

  private async sendEmailAPI(email: EmailInterface): Promise<void> {
    await new Promise((resolve, reject) => {
      this.SES.sendTemplatedEmail(email, (e: AWS.AWSError) => {
        if (e) {
          this.log.warn('Error while sending the email: ', e);
          email.error = true;
          email.errorDetails = e;
          this.logCommunication(
            email,
            config.communicationMethods.EMAIL,
            false
          );
          return reject(new Error('Error while sending the email'));
        }
        this.logCommunication(email, config.communicationMethods.EMAIL);
        resolve();
      });
    });
  }

  private async sendRawEmailAPI(
    email: EmailInterfaceWithAttachment
  ): Promise<void> {
    await new Promise((resolve, reject) => {
      this.SES.sendRawEmail(email, (e: AWS.AWSError) => {
        if (e) {
          this.log.info('Error while sending the email (With Attachment): ', e);
          return reject(new Error('Error while sending the email'));
        }
        resolve();
      });
    });
  }

  private async sendBulkEmailAPI(
    bulkEmail: AWS.SES.Types.SendBulkTemplatedEmailRequest
  ): Promise<void> {
    await new Promise((resolve, reject) => {
      this.SES.sendBulkTemplatedEmail(bulkEmail, (e: AWS.AWSError) => {
        if (e) {
          this.log.info(
            `Error while sending bulk emails ${bulkEmail.Template}: `,
            e
          );
          return reject(new Error('Error while sending the bulk email'));
        }
        resolve();
      });
    });
  }

  private splitIntoChunks = <T>(arr: T[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };
}
