import {
  SolarisWebhookLogDoc,
  solarisWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const SolarisWebhookLogModel = mainConnection.db.model<
  SolarisWebhookLogDoc
>('SolarisWebhookLog', solarisWebhookLogSchema);
