import { insertWebhookLog } from './lib/insertWebhookLog';

export { SdaCustodyWebhookLogModel } from './model';

export const sdaCustodyWebhookLogsRepo = {
  insert: insertWebhookLog,
};
