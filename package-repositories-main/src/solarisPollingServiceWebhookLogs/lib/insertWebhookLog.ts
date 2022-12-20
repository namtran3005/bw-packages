import {
  SolarisWebhookLogDoc,
  SolarisWebhookLog,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisPollingServiceWebhookLogModel } from '../model';

export const insertWebhookLog = (
  webhookLog: SolarisWebhookLog
): Promise<SolarisWebhookLogDoc> => {
  return SolarisPollingServiceWebhookLogModel.create(webhookLog);
};
