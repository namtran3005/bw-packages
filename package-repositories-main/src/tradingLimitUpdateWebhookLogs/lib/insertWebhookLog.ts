import {
  TradingLimitUpdateWebhookLog,
  TradingLimitUpdateWebhookLogDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { TradingLimitUpdateWebhookLogModel } from '../model';

export const insertWebhookLog = (
  payload: TradingLimitUpdateWebhookLog
): Promise<TradingLimitUpdateWebhookLogDoc> => {
  return TradingLimitUpdateWebhookLogModel.create(payload);
};
