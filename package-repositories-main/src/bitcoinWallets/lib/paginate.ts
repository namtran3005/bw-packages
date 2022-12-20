import { BitcoinWalletDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinWalletModel } from '../model';

export const paginate = (
  projection: Partial<Record<string, 1 | 0>>,
  offset: number,
  limit: number
): Promise<DocumentDefinition<BitcoinWalletDoc>[]> => {
  return BitcoinWalletModel.find({
    deletedAt: { $exists: false },
  })
    .select(projection)
    .sort({ createdAt: 1 })
    .skip(offset)
    .limit(limit)
    .lean()
    .exec();
};
