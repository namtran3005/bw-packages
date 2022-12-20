import {
  UpvestWebhookLogDoc,
  upvestWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const UpvestWebhookLogModel = mainConnection.db.model<
  UpvestWebhookLogDoc
>('UpvestWebhookLog', upvestWebhookLogSchema);
