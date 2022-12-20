import { BitcoinTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinTransactionModel } from '../model';

export const findManyByBitgoId = (
  bitgoIds: string[]
): Promise<DocumentDefinition<BitcoinTransactionDoc>[]> => {
  return BitcoinTransactionModel.find({ bitgoId: { $in: bitgoIds } })
    .lean()
    .exec();
};
