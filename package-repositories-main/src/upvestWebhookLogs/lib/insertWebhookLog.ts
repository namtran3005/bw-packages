import {
  UpvestWebhookLog,
  UpvestWebhookLogDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { UpvestWebhookLogModel } from '../model';

export const insertWebhookLog = (
  payload: UpvestWebhookLog
): Promise<UpvestWebhookLogDoc> => {
  return UpvestWebhookLogModel.create(payload);
};
