import { insertWebhookLog } from './lib/insertWebhookLog';

export { PriceAlertsPollerWebhookLogsModel } from './model';

export const priceAlertsPollerWebhookLogsRepo = {
  insert: insertWebhookLog,
};
