import {
  PriceAlertsPollerWebhookLogsDoc,
  PriceAlertsPollerWebhookLog,
} from '@bitwala-cryptobank-squad/package-schemas';
import { PriceAlertsPollerWebhookLogsModel } from '../model';

export const insertWebhookLog = (
  webhookLog: PriceAlertsPollerWebhookLog
): Promise<PriceAlertsPollerWebhookLogsDoc> => {
  return PriceAlertsPollerWebhookLogsModel.create(webhookLog);
};
