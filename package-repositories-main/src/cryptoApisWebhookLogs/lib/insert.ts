import {
  CryptoApisWebhookLog,
  CryptoApisWebhookLogDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoApisWebhookLogModel } from '../model';

export const insert = (
  log: CryptoApisWebhookLog
): Promise<CryptoApisWebhookLogDoc> => {
  return CryptoApisWebhookLogModel.create(log);
};
