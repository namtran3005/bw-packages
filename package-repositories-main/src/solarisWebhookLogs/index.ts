import { insertWebhookLog } from './lib/insertWebhookLog';
import { findOneById } from './lib/findOneById';

export { SolarisWebhookLogModel } from './model';

export const solarisWebhookLogRepo = {
  insert: insertWebhookLog,
  findOneById,
};
