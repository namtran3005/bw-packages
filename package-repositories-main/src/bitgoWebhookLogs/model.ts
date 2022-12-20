import {
  BitgoWebhookLogDoc,
  bitgoWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const BitgoWebhookLogModel = mainConnection.db.model<BitgoWebhookLogDoc>(
  'BitgoWebhookLog',
  bitgoWebhookLogSchema
);
