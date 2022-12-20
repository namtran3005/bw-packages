import { TransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { TransactionModel } from '../model';

export const getTransactions = async (
  selector: Partial<TransactionDoc>,
  limit: number,
  offset: number,
  sort: { transactionTime: number }
): Promise<DocumentDefinition<TransactionDoc>[]> => {
  return TransactionModel.find({
    ...selector,
    deletedAt: { $exists: false },
  })
    .skip(offset)
    .limit(limit)
    .sort(sort)
    .lean({ getters: true })
    .exec();
};
