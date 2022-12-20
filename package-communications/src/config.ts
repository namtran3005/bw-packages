import { ConfigInterface } from './types/interfaces';

export const config: ConfigInterface = {
  awsRegion: 'eu-west-1',
  email: {
    replyToAddress: `"${process.env.MAIL_SENDER}" <${process.env.MAIL_FROM}>`,
    source: `"${process.env.MAIL_SENDER}" <${process.env.MAIL_FROM}>`,
  },
  communicationMethods: {
    EMAIL: 'email',
    SMS: 'sms',
    PUSH: 'push',
  },
};
