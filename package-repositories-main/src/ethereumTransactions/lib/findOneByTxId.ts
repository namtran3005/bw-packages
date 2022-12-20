import { EthereumTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const findOneByTxId = (
  txId: string,
  owner?: string
): Promise<DocumentDefinition<EthereumTransactionDoc> | null> => {
  return EthereumTransactionModel.findOne({ txId, ...(owner ? { owner } : {}) })
    .lean()
    .exec();
};
