import { insert } from './lib/insert';
import { findOneByReferenceId } from './lib/findOneByReferenceId';

export { CryptoApisWebhookSubscriptionModel } from './model';

export const cryptoApisWebhookSubscriptionsRepo = {
  insert,
  findOneByReferenceId,
};
