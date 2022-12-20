import {
  EthereumWalletDoc,
  EthereumWalletInput,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumWalletModel } from '../model';

export const mergeOneById = (
  walletId: string,
  data: Partial<EthereumWalletInput>
): Promise<DocumentDefinition<EthereumWalletDoc> | null> => {
  return EthereumWalletModel.findOneAndUpdate(
    { _id: walletId },
    { $set: data },
    { runValidators: true, new: true }
  )
    .lean()
    .exec();
};
