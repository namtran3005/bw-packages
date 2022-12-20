import { insertSubscription } from './lib/insertSubscription';
import { findOneByWebhookId } from './lib/findOneByWebhookId';

export { UpvestWebhookSubscriptionModel } from './model';

export const upvestWebhookSubscriptionsRepo = {
  insert: insertSubscription,
  findOneByWebhookId,
};
