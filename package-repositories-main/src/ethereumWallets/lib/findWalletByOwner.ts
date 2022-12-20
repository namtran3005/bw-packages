import { EthereumWalletDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumWalletModel } from '../model';

export const findWalletByOwner = (
  owner: string
): Promise<DocumentDefinition<EthereumWalletDoc> | null> => {
  return EthereumWalletModel.findOne({
    owner,
    deletedAt: { $exists: false },
  })
    .lean()
    .exec();
};
