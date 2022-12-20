import { EthereumTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const findAllByNonce = (
  walletId: string,
  nonce: number
): Promise<DocumentDefinition<EthereumTransactionDoc>[]> => {
  return EthereumTransactionModel.find({ walletId, nonce })
    .lean()
    .exec();
};
