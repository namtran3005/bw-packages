import {
  CryptoTaxWebhookLogsDoc,
  cryptoTaxWebhookLogsSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const CryptoTaxWebhookLogsModel = mainConnection.db.model<
  CryptoTaxWebhookLogsDoc
>('CryptoTaxWebhookLogs', cryptoTaxWebhookLogsSchema);
