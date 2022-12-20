import {
  TradingWebhookLogDoc,
  TradingWebhookLog,
} from '@bitwala-cryptobank-squad/package-schemas';
import { TradingWebhookLogModel } from '../model';

export const insertWebhookLog = (
  webhookLog: TradingWebhookLog
): Promise<TradingWebhookLogDoc> => {
  return TradingWebhookLogModel.create(webhookLog);
};
