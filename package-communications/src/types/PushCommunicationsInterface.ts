import {
    PushInterfaceSimple, SMSInterfaceSimple
} from './interfaces';

export interface PushCommunicationsInterface {
    sendSMS({ to, subject, message }: SMSInterfaceSimple): Promise<void>;
  
    sendPush({
      endpointArn,
      message,
      messageStructure,
    }: PushInterfaceSimple): Promise<AWS.SNS.PublishResponse>;
  
    registerDeviceToken(
      snsApplicationArn: string,
      token: string
    ): Promise<string>;
  }
