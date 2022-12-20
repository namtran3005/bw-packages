import {
  BitcoinTransaction,
  BitcoinTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinTransactionModel } from '../model';

export const upsert = (
  data: BitcoinTransaction
): Promise<DocumentDefinition<BitcoinTransactionDoc> | null> => {
  return BitcoinTransactionModel.findOneAndUpdate(
    { bitgoId: data.bitgoId },
    { $set: data },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  )
    .lean()
    .exec();
};
