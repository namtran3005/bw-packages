import { EthereumTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { EthereumTransactionModel } from '../model';

export const findOneById = (
  id: string
): Promise<DocumentDefinition<EthereumTransactionDoc> | null> => {
  return EthereumTransactionModel.findOne({ _id: id })
    .lean()
    .exec();
};
