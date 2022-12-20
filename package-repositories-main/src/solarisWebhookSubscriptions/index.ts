import { insertSubscription } from './lib/insertSubscription';
import { findAll } from './lib/findAll';
import { findOneByEvent } from './lib/findOneByEvent';

export { SolarisWebhookSubscriptionModel } from './model';

export const solarisWebhookSubscriptionsRepo = {
  insert: insertSubscription,
  find: findAll,
  findOneByEvent,
};
