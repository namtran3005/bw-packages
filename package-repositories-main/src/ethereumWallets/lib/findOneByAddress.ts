import { EthereumWalletDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumWalletModel } from '../model';

export const findOneByAddress = (
  address: string,
  options: {
    // If this option is set to true, it will also return the wallet if deleted
    includeDeleted?: boolean;
  } = {}
): Promise<DocumentDefinition<EthereumWalletDoc> | null> => {
  return EthereumWalletModel.findOne({
    receiveAddresses: address,
    ...(!options.includeDeleted ? { deletedAt: { $exists: false } } : {}),
  })
    .lean()
    .exec();
};
