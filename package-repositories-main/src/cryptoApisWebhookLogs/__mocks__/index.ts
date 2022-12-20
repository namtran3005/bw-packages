import { cryptoApisWebhookLogsRepo as originalCryptoApisWebhookLogsRepo } from '../index';

export const cryptoApisWebhookLogsRepo: {
  [K in keyof typeof originalCryptoApisWebhookLogsRepo]: jest.Mock;
} = {
  insert: jest.fn(() => Promise.resolve(null)),
};
