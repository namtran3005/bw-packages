import { TransactionDoc, TransactionStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { TransactionModel } from '../model';

export const updateStateById = (
  id: string,
  status: TransactionStatus
): Promise<DocumentDefinition<TransactionDoc> | null> => {
  return TransactionModel.findOneAndUpdate(
    {
      _id: id,
    },
    { $set: { status } },
    {
      new: true,
      runValidators: true,
    }
  )
    .lean({ getters: true })
    .exec();
};
