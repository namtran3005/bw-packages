import { TransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { TransactionModel } from '../model';

export const findOne = (
  selector: Partial<TransactionDoc>
): Promise<DocumentDefinition<TransactionDoc> | null> => {
  return TransactionModel.findOne(selector)
    .lean({ getters: true })
    .exec();
};
