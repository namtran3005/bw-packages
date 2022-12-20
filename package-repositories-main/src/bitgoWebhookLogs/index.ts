import { insertWebhookLog } from './lib/insertWebhookLog';

export { BitgoWebhookLogModel } from './model';

export const bitgoWebhookLogsRepo = {
  insert: insertWebhookLog,
};
