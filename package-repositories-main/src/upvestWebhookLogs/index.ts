import { insertWebhookLog } from './lib/insertWebhookLog';

export { UpvestWebhookLogModel } from './model';

export const upvestWebhookLogsRepo = {
  insert: insertWebhookLog,
};
