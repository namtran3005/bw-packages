import { TransactionDoc, TransactionInput } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { TransactionModel } from '../model';

export const updateOne = (
  selector: {
    domain: string;
    itemId: string;
  },
  input: Partial<TransactionInput>
): Promise<DocumentDefinition<TransactionDoc> | null> => {
  return TransactionModel.findOneAndUpdate(
    selector,
    { $set: input },
    { runValidators: true }
  )
    .lean({ getters: true })
    .exec();
};
