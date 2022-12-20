import {
  CryptoApisWebhookLogDoc,
  cryptoApisWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const CryptoApisWebhookLogModel = mainConnection.db.model<CryptoApisWebhookLogDoc>(
  'CryptoApisWebhookLog',
  cryptoApisWebhookLogSchema
);
