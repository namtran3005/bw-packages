import {
  CryptoLendingTransactionDoc, CryptoLendingTransactionType, CryptoLendingWithdrawalDoc,
  TransactionStatus
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export const getPendingWithdrawals = (options: {
  owner?: string;
  currency?: CryptoLendingWithdrawalDoc['currency'];
  createdBefore?: Date;
}): Promise<DocumentDefinition<CryptoLendingTransactionDoc>[]> => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const conditions: Record<string, any> = {
    status: TransactionStatus.PENDING,
    type: CryptoLendingTransactionType.WITHDRAWAL,
  };

  if (options.createdBefore) {
    conditions.createdAt = { $lt: options.createdBefore };
  }

  if (options.owner) {
    conditions.owner = options.owner;
  }

  if (options.currency) {
    conditions.currency = options.currency;
  }

  return CryptoLendingTransactionModel.find(conditions)
    .lean()
    .exec();
};
