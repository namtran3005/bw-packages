import { insertWebhookLog } from './lib/insertWebhookLog';

export { SolarisPollingServiceWebhookLogModel } from './model';

export const solarisPollingServiceWebhookLogRepo = {
  insert: insertWebhookLog,
};
