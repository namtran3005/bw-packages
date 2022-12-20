import {
  EthereumTransactionDoc,
  EthereumTransaction,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const mergeOne = (
  {
    txId,
    owner,
  }: {
    txId: string;
    owner: string;
  },
  data: Partial<EthereumTransaction>
): Promise<DocumentDefinition<EthereumTransactionDoc> | null> => {
  return EthereumTransactionModel.findOneAndUpdate(
    { txId, owner },
    { $set: data },
    { new: true, runValidators: true }
  )
    .lean()
    .exec();
};
