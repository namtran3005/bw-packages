import { TransactionDoc, TransactionInput } from '@bitwala-cryptobank-squad/package-schemas';
import { TransactionModel } from '../model';

export const insertTransaction = (
  transaction: TransactionInput
): Promise<TransactionDoc> => {
  return TransactionModel.create(transaction);
};
