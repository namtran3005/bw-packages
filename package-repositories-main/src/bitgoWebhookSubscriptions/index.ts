import { insertSubscription } from './lib/insertSubscription';

export { BitgoWebhookSubscriptionModel } from './model';

export const bitgoWebhookSubscriptionsRepo = {
  insert: insertSubscription,
};
