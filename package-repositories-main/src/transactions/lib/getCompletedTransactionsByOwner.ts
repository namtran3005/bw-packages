import { TransactionStatus, TransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { TransactionModel } from '../model';

export const getCompletedTransactionsByOwner = async (
  owner: string,
  limit: number
): Promise<TransactionDoc[]> =>
  TransactionModel.find({
    status: TransactionStatus.COMPLETE,
    deletedAt: { $exists: false },
    owner,
  })
    .sort({ transactionTime: -1 })
    .limit(limit)
    .lean();
