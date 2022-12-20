import AWS from 'aws-sdk';
import { config } from './config';
import { CommunicationBase, PushCommunicationsInterface } from './types';
import {
  BulkDestination as BulkDestinationType,
  DeviceTokenInterface,
  PushInterface,
  PushInterfaceSimple,
  RegionConfigInterface,
  SMSInterface,
  SMSInterfaceSimple,
} from './types/interfaces';

export type BulkDestination = BulkDestinationType;

export class PushCommunications
  extends CommunicationBase
  implements PushCommunicationsInterface {
  private SNS: AWS.SNS;

  // On Main, do not use this method directly to send communications out. Use the notifications module instead!
  // Please read the docs in Sending_emails_sms_push_notifications.md
  constructor(customConfig: RegionConfigInterface) {
    super('PUSH_COMMUNICATIONS');
    AWS.config.region = customConfig.awsRegion;

    this.SNS = new AWS.SNS();
  }

  public sendSMS({ to, subject, message }: SMSInterfaceSimple): Promise<void> {
    const sms = this.prepareSMS({ to, subject, message });
    return this.sendSMSAPI(sms);
  }

  public async sendPush({
    endpointArn,
    message,
    messageStructure,
  }: PushInterfaceSimple): Promise<AWS.SNS.PublishResponse> {
    const push = this.preparePush({ endpointArn, message, messageStructure });
    return this.sendPushAPI(push);
  }

  public async registerDeviceToken(
    snsApplicationArn: string,
    token: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const tokenObj: DeviceTokenInterface = {
        PlatformApplicationArn: snsApplicationArn,
        Token: token,
      };
      this.SNS.createPlatformEndpoint(
        tokenObj,
        (e: AWS.AWSError, data: AWS.SNS.Types.CreateEndpointResponse) => {
          if (e) {
            this.log.info(`Error while registering device token ${token}: `, e);
            return reject(new Error('Error while registering device token'));
          } else if (data) {
            resolve(data.EndpointArn);
          } else {
            return reject(new Error('Error while registering device token'));
          }
        }
      );
    }) as Promise<string>;
  }

  private preparePush({
    message,
    endpointArn,
    messageStructure = 'string',
  }: PushInterfaceSimple): PushInterface {
    const push = {
      MessageStructure: messageStructure,
      Message: message,
      TargetArn: endpointArn,
    };

    return push;
  }

  private prepareSMS({
    to,
    subject,
    message,
  }: SMSInterfaceSimple): SMSInterface {
    const sms = {
      Message: message,
      MessageStructure: 'string',
      PhoneNumber: to,
      Subject: subject,
    };

    return sms;
  }

  private async sendSMSAPI(sms: SMSInterface) {
    await new Promise((resolve, reject) => {
      this.SNS.publish(sms, (e: AWS.AWSError) => {
        if (e) {
          this.log.info('Error while sending the SMS: ', e);
          sms.error = true;
          sms.errorDetails = e;
          this.logCommunication(sms, config.communicationMethods.SMS, false);
          return reject(new Error('Error while sending the SMS'));
        }
        this.logCommunication(sms, config.communicationMethods.SMS);
        resolve();
      });
    });
  }

  private async sendPushAPI(
    push: PushInterface
  ): Promise<AWS.SNS.PublishResponse> {
    try {
      const data = await this.SNS.publish(push).promise();
      this.logCommunication(push, config.communicationMethods.PUSH);
      return data;
    } catch (error) {
      this.log.info(
        'Error while sending push notification: ',
        JSON.stringify(error)
      );
      push.error = true;
      push.errorDetails = error;
      this.logCommunication(push, config.communicationMethods.PUSH, false);
      throw error;
    }
  }
}
