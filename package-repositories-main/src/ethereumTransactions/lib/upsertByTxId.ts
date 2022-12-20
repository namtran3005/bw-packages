import {
  EthereumTransaction,
  EthereumTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const upsertByTxId = (
  txId: string,
  data: EthereumTransaction
): Promise<DocumentDefinition<EthereumTransactionDoc> | null> => {
  return EthereumTransactionModel.findOneAndUpdate(
    { txId },
    { $set: data },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  )
    .lean()
    .exec();
};
