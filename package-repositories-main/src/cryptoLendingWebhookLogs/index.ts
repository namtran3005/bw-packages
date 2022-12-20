import { insertWebhookLog } from './lib/insertWebhookLog';

export { CryptoLendingWebhookLogModel } from './model';

export const cryptoLendingWebhookLogsRepo = {
  insert: insertWebhookLog,
};
