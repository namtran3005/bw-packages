import { TransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { TransactionModel } from '../model';

export const deleteOneById = (id: string): Promise<DocumentDefinition<TransactionDoc> | null> => {
  return TransactionModel.deleteOne({
    _id: id,
  })
    .lean()
    .exec();
};
