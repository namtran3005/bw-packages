import {
  CryptoLendingWebhookLogDoc,
  cryptoLendingWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const CryptoLendingWebhookLogModel = mainConnection.db.model<
  CryptoLendingWebhookLogDoc
>('CryptoLendingWebhookLog', cryptoLendingWebhookLogSchema);
