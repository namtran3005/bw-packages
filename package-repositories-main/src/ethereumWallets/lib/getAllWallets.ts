import { EthereumWalletDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumWalletModel } from '../model';

export const getAllWallets = (): Promise<DocumentDefinition<EthereumWalletDoc>[]> => {
  return (
    EthereumWalletModel.find({
      deletedAt: { $exists: false },
    })
      // we just need those 3 fields for the time being
      .select({ owner: 1, receiveAddresses: 1, coin: 1 })
      .lean()
      .exec()
  );
};
