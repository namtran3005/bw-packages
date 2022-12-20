import {
  TradingWebhookLogDoc,
  tradingWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const TradingWebhookLogModel = mainConnection.db.model<
  TradingWebhookLogDoc
>('TradingWebhookLog', tradingWebhookLogSchema);
