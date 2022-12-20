import { BitcoinWalletDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinWalletModel } from '../model';

export const addReceiveAddress = (
  walletId: string,
  address: string
): Promise<DocumentDefinition<BitcoinWalletDoc> | DocumentDefinition<BitcoinWalletDoc>[] | null> => {
  return BitcoinWalletModel.update(
    { _id: walletId },
    {
      $push: {
        receiveAddresses: {
          $each: [address],
          $position: 0,
        },
      },
    }
  )
    .lean()
    .exec();
};
