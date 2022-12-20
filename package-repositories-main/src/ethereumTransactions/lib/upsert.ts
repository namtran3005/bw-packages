import {
  EthereumTransaction,
  EthereumTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const upsert = (
  {
    txId,
    owner,
  }: {
    txId: string;
    owner: string;
  },
  data: EthereumTransaction
): Promise<DocumentDefinition<EthereumTransactionDoc> | null> => {
  return EthereumTransactionModel.findOneAndUpdate(
    { txId, owner },
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
