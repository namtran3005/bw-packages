import { insertWebhookLog } from './lib/insertWebhookLog';

export { TradingWebhookLogModel } from './model';

export const tradingWebhookLogRepo = {
  insert: insertWebhookLog,
};
