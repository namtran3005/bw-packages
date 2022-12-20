import {
  TradingLimitUpdateWebhookLogDoc,
  TradingLimitUpdateWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const TradingLimitUpdateWebhookLogModel = mainConnection.db.model<
  TradingLimitUpdateWebhookLogDoc
>('TradingLimitUpdateWebhookLogs', TradingLimitUpdateWebhookLogSchema);
