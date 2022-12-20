import { BitcoinTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinTransactionModel } from '../model';

export const findOneById = (
  id: string
): Promise<DocumentDefinition<BitcoinTransactionDoc> | null> => {
  return BitcoinTransactionModel.findOne({ _id: id })
    .lean()
    .exec();
};
