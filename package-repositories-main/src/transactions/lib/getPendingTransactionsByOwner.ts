import { TransactionStatus, TransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { TransactionModel } from '../model';

export const getPendingTransactionsByOwner = async (
  owner: string,
  limitTimeframe?: Date
): Promise<TransactionDoc[]> => {
  const pendingTransactions: TransactionDoc[] = await TransactionModel.find({
    status: TransactionStatus.PENDING,
    ...(limitTimeframe ? { createdAt: { $gte: limitTimeframe } } : {}),
    deletedAt: { $exists: false },
    owner,
  });

  return pendingTransactions;
};
