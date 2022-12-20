import { EthereumTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const findLatestByWalletId = (
  id: string
): Promise<DocumentDefinition<EthereumTransactionDoc> | null> => {
  return EthereumTransactionModel.findOne({ walletId: id })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
};
