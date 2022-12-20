import { insertWebhookLog } from './lib/insertWebhookLog';

export { TradingLimitUpdateWebhookLogModel } from './model';

export const tradingLimitUpdateWebhookLogsRepo = {
  insert: insertWebhookLog,
};
