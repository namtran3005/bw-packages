import { BitcoinWalletDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinWalletModel } from '../model';

export const findWalletById = (
  id: string
): Promise<DocumentDefinition<BitcoinWalletDoc> | null> => {
  return BitcoinWalletModel.findOne(
    {
      _id: id,
      deletedAt: { $exists: false },
    },
    {
      // there can be really A LOT of receive addresses with time, make sure you don't query all of them
      receiveAddresses: { $slice: 10 },
    }
  )
    .lean()
    .exec();
};
