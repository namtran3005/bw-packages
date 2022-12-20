import {
  SdaCustodyWebhookLogDoc,
  sdaCustodyWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const SdaCustodyWebhookLogModel = mainConnection.db.model<
  SdaCustodyWebhookLogDoc
>('SdaCustodyWebhookLog', sdaCustodyWebhookLogSchema);
