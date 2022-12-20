import { TemplateNames } from '@bitwala-cryptobank-squad/package-emails';

export interface Variables {
  [key: string]: string;
}

export interface SendEmailInterface {
  userId?: string;
  templateName: TemplateNames;
  locale: string;
  mailEnv: string;
  to: string;
  bccAddress?: string[];
  ccAddress?: string[];
  variables: Variables;
}

export interface PrepareEmailInterface {
  to: string;
  bccAddress?: string[];
  ccAddress?: string[];
  template: string;
  variables: Variables;
}

export interface BulkDestination {
  toAddress: string;
  variables: Record<string, string>;
}

export interface BulkTemplatedEmailsInterface {
  destination: [BulkDestination];
  templateName: TemplateNames;
  locale: string;
  mailEnv: string;
}

export interface SMSInterfaceSimple {
  to: string;
  message: string;
  subject: string;
}

export interface EmailInterface {
  Destination: {
    BccAddresses: string[];
    CcAddresses: string[];
    ToAddresses: string[];
  };
  Template: string;
  TemplateData: string;
  Source: string;
  ReplyToAddresses: string[];
  error?: boolean;
  errorDetails?: Error;
  ConfigurationSetName?: string;
  Tags: { Name: string; Value: string }[];
}

export interface EmailInterfaceWithAttachment {
  Destinations: string[];
  RawMessage: { Data: object };
  ConfigurationSetName?: string;
  Tags?: { Name: string; Value: string }[];
}

export interface RawEmailInterfaceSimple {
  to: string;
  subject: string;
  from: string;
  html: string;
  plaintext: string;
}

export interface RawEmailInterfaceWithAttachment {
  to: string;
  subject: string;
  from: string;
  html: string;
  plaintext: string;
  rawMessage?: Buffer;
  attachmentName?: string;
  attachmentContentType?: string;
  attachments?: AttachmentInterface[];
  ConfigurationSetName?: string;
  Tags?: { Name: string; Value: string }[];
}

export interface AttachmentInterface {
  filename: string;
  content: Buffer;
}

export interface RawEmailInterface {
  Destination: {
    ToAddresses: string[];
  };
  Message: {
    Body: {
      Html: {
        Charset: string;
        Data: string;
      };
      Text: {
        Charset: string;
        Data: string;
      };
    };
    Subject: {
      Charset: string;
      Data: string;
    };
  };
  Source: string;
  error?: boolean;
  errorDetails?: Error;
}

export interface SMSInterface {
  Message: string;
  MessageStructure: string;
  PhoneNumber: string;
  Subject?: string;
  error?: boolean;
  errorDetails?: Error;
}

export interface PushInterfaceSimple {
  endpointArn: string;
  message: string;
  messageStructure?: 'json' | 'string';
}

export interface PushInterface {
  TargetArn: string;
  Message: string;
  MessageStructure: string;
  error?: boolean;
  errorDetails?: Error;
}

export interface EmailConfigInterface {
  replyToAddress: string;
  source: string;
  /** Region to use. Defaults to eu-west-1 (change it to eu-central-1 for push notifications) */
  awsRegion?: string;
}

export interface RegionConfigInterface {
  /** Region to use. Defaults to eu-west-1 (change it to eu-central-1 for push notifications) */
  awsRegion: string;
}

export interface CommunicationMethodsInterface {
  EMAIL: string;
  SMS: string;
  PUSH: string;
}

export interface ConfigInterface {
  awsRegion: string;
  email: EmailConfigInterface;
  communicationMethods: CommunicationMethodsInterface;
}

export interface InstanceConfig {
  email: EmailConfigInterface;
}

export interface DeviceTokenInterface {
  PlatformApplicationArn: string;
  Token: string;
  error?: boolean;
  errorDetails?: Error;
}

export interface BulkEmailData {
  DefaultTemplateData: string;
  Destinations: {
    Destination: {
      ToAddresses: string[];
    };
    ReplacementTemplateData: string;
  }[];
  Template: string;
  Source: string;
}
