import {
  ClearingTransactionDoc,
  ClearingTransaction,
} from '@bitwala-cryptobank-squad/package-schemas';
import { ClearingTransactionModel } from '../model';

export const insert = (
  transfer: ClearingTransaction & { owner: string }
): Promise<ClearingTransactionDoc> => {
  return ClearingTransactionModel.create(transfer);
};
