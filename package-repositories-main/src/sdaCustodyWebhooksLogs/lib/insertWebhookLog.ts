import {
  SdaCustodyWebhookLog,
  SdaCustodyWebhookLogDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SdaCustodyWebhookLogModel } from '../model';

export const insertWebhookLog = (
  payload: SdaCustodyWebhookLog
): Promise<SdaCustodyWebhookLogDoc> => {
  return SdaCustodyWebhookLogModel.create(payload);
};
