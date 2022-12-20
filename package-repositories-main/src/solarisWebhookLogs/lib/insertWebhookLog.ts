import {
  SolarisWebhookLogDoc,
  SolarisWebhookLog,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisWebhookLogModel } from '../model';

export const insertWebhookLog = (
  webhookLog: SolarisWebhookLog
): Promise<SolarisWebhookLogDoc> => {
  return SolarisWebhookLogModel.create(webhookLog);
};
