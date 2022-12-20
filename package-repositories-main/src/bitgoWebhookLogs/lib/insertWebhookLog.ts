import { BitgoWebhookLog, BitgoWebhookLogDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { BitgoWebhookLogModel } from '../model';

export const insertWebhookLog = (
  payload: BitgoWebhookLog
): Promise<BitgoWebhookLogDoc> => {
  return BitgoWebhookLogModel.create(payload);
};
