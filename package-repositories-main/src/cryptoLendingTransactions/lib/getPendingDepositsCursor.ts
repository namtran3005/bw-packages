import { QueryCursor, Document } from 'mongoose';
import {
  CryptoLendingTransactionType,
  CryptoLendingDeposit,
} from '@bitwala-cryptobank-squad/package-schemas';
import { TransactionStatus } from '@bitwala-cryptobank-squad/package-utils';
import { CryptoLendingTransactionModel } from '../model';
import { createBatchedCursor } from '../../utils';

export const getPendingDepositsCursor = (
  batchSize: number,
  options?: {
    createdBefore?: Date;
  }
) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const conditions: Record<string, any> = {
    status: TransactionStatus.PENDING,
    type: CryptoLendingTransactionType.DEPOSIT,
  };

  if (options?.createdBefore) {
    conditions.createdAt = { $lt: options.createdBefore };
  }

  const cursor = CryptoLendingTransactionModel.find(conditions)
    .lean()
    .batchSize(batchSize)
    .cursor();

  return createBatchedCursor(
    cursor as QueryCursor<CryptoLendingDeposit & Document>,
    batchSize
  );
};
