import {
  CryptoTaxWebhookLogsDoc,
  CryptoTaxWebhookLog,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoTaxWebhookLogsModel } from '../model';

export const insertWebhookLog = (
  webhookLog: CryptoTaxWebhookLog
): Promise<CryptoTaxWebhookLogsDoc> => {
  return CryptoTaxWebhookLogsModel.create(webhookLog);
};
