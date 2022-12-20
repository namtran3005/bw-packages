import { PushCommunications } from '..';
import { config } from '../config';

describe('PushCommunications', () => {
  let instance: Record<string, any>;
  const messageSMS = {
    to: '+4900000000',
    subject: 'testing test',
    message: 'hodlbar',
  };

  beforeEach(() => {
    instance = new PushCommunications({awsRegion: ""});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('PushCommunications constructor', () => {
    it('should create a new instance', () => {
      expect(instance).toBeInstanceOf(PushCommunications);
    });
  });

  describe('PushCommunications sendSMS', () => {
    it('should call prepareSMS and call sendSMSAPI', () => {
      instance.prepareSMS = jest.fn().mockReturnValue({ sms: true });
      instance.sendSMSAPI = jest.fn();

      instance.sendSMS(messageSMS);

      expect(instance.prepareSMS).toBeCalledWith(messageSMS);
      expect(instance.sendSMSAPI).toBeCalledWith({ sms: true });
    });
  });

  describe('PushCommunications prepareSMS', () => {
    it('returns correct obj', () => {
      const expectedValue = {
        Message: messageSMS.message,
        MessageStructure: 'string',
        PhoneNumber: messageSMS.to,
        Subject: messageSMS.subject,
      };

      const preparedSMS = instance.prepareSMS(messageSMS);

      expect(preparedSMS).toEqual(expectedValue);
    });
  });

  describe('PushCommunications sendSMSAPI', () => {
    it('should call SNS.publish and log the error', () => {
      instance.SNS.publish = jest.fn((email, cb) => {
        return cb('error');
      });
      instance.log.info = jest.fn();
      instance.logCommunication = jest.fn();
      const paramSMS = { hodl: 'always' };
      const expectedErrorSMS = {
        error: true,
        errorDetails: 'error',
        ...paramSMS,
      };

      instance.sendSMSAPI(paramSMS);

      expect(instance.SNS.publish).toBeCalled();
      expect(instance.log.info).toBeCalledWith(
        'Error while sending the SMS: ',
        'error'
      );
      expect(instance.logCommunication).toBeCalledWith(
        expectedErrorSMS,
        config.communicationMethods.SMS,
        false
      );
    });

    it('should call SNS.publish', () => {
      instance.SNS.publish = jest.fn((email, cb) => {
        return cb('error');
      });
      instance.logCommunication = jest.fn();
      const paramSMS = { hodl: 'always' };

      instance.sendSMSAPI(paramSMS);

      expect(instance.SNS.publish).toBeCalled();
      expect(instance.logCommunication).toBeCalledWith(
        paramSMS,
        config.communicationMethods.SMS,
        false
      );
    });
  });

  describe('PushCommunications logCommunication', () => {
    it('should call SNS.publish and log the error', () => {
      instance.log.info = jest.fn();
      const transportationMethod = 'timeMachine';
      const paramObj = { hodl: 'always' };
      const expectedObj = { transportationMethod, ...paramObj };

      instance.logCommunication(paramObj, transportationMethod, false);

      expect(instance.log.info).toBeCalledWith(expectedObj);
    });
  });
});
