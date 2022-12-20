import { TransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { TransactionModel } from '../model';

export const findOneById = (id: string): Promise<DocumentDefinition<TransactionDoc> | null> => {
  return TransactionModel.findOne({
    _id: id,
  })
    .lean({ getters: true })
    .exec();
};
