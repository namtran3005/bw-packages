import {
  CryptoLendingTransaction,
  CryptoLendingTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoLendingTransactionModel } from '../model';

export const insert = (
  tx: CryptoLendingTransaction
): Promise<CryptoLendingTransactionDoc> => {
  return CryptoLendingTransactionModel.create(tx);
};
