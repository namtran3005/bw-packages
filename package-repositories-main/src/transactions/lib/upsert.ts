import { TransactionDoc, TransactionInput } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { generateObjectId } from '../../utils';
import { TransactionModel } from '../model';

export const upsert = (
  input: TransactionInput,
  selector?: Partial<TransactionDoc>
): Promise<DocumentDefinition<TransactionDoc> | null> => {
  // update existing if itemId passed or create new. defaultSelector forces mongoose to insert new doc
  const defaultSelector = { _id: generateObjectId() };
  return TransactionModel.findOneAndUpdate(
    selector || defaultSelector,
    {
      $set: input,
    },
    {
      new: true,
      runValidators: true,
      upsert: true,
      setDefaultsOnInsert: true,
    }
  )
    .lean({ getters: true })
    .exec();
};
