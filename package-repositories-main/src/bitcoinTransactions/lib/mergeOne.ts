import {
  BitcoinTransactionDoc,
  BitcoinTransaction,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinTransactionModel } from '../model';

export const mergeOne = (
  bitgoId: string,
  data: Partial<BitcoinTransaction>
): Promise<DocumentDefinition<BitcoinTransactionDoc> | null> => {
  return BitcoinTransactionModel.findOneAndUpdate(
    { bitgoId },
    { $set: data },
    { runValidators: true }
  )
    .lean()
    .exec();
};
