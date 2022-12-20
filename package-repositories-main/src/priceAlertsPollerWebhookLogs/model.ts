import {
  PriceAlertsPollerWebhookLogsDoc,
  priceAlertsPollerWebhookLogSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const PriceAlertsPollerWebhookLogsModel = mainConnection.db.model<
  PriceAlertsPollerWebhookLogsDoc
>('PriceAlertsPollerWebhookLogs', priceAlertsPollerWebhookLogSchema);
