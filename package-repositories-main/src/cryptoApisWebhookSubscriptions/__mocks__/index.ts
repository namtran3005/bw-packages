import { cryptoApisWebhookSubscriptionsRepo as originalCryptoApisWebhookSubscriptionsRepo } from '../index';

export const cryptoApisWebhookSubscriptionsRepo: {
  [K in keyof typeof originalCryptoApisWebhookSubscriptionsRepo]: jest.Mock;
} = {
  insert: jest.fn(() => Promise.resolve(null)),
  findOneByReferenceId: jest.fn(() => Promise.resolve(null)),
};
