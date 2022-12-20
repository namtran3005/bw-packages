import { insertWebhookLog } from './lib/insertWebhookLog';

export { CryptoTaxWebhookLogsModel } from './model';

export const cryptoTaxWebhookLogsRepo = {
  insert: insertWebhookLog,
};
