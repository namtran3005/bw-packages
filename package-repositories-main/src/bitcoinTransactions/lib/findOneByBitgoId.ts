import { BitcoinTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinTransactionModel } from '../model';

export const findOneByBitgoId = (
  bitgoId: string
): Promise<DocumentDefinition<BitcoinTransactionDoc> | null> => {
  return BitcoinTransactionModel.findOne({ bitgoId })
    .lean()
    .exec();
};
