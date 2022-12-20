import {
  CryptoLendingWebhookLog,
  CryptoLendingWebhookLogDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoLendingWebhookLogModel } from '../model';

export const insertWebhookLog = (
  payload: CryptoLendingWebhookLog
): Promise<CryptoLendingWebhookLogDoc> => {
  return CryptoLendingWebhookLogModel.create(payload);
};
