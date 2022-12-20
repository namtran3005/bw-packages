import {
  SolarisWebhookLogDoc,
  solarisPollingServiceWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const SolarisPollingServiceWebhookLogModel = mainConnection.db.model<
  SolarisWebhookLogDoc
>('SolarisPollingServiceWebhookLog', solarisPollingServiceWebhookLogSchema);
