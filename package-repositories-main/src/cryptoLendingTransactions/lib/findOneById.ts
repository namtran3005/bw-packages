import { CryptoLendingTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export const findOneById = (
  id: string
): Promise<DocumentDefinition<CryptoLendingTransactionDoc> | null> => {
  return CryptoLendingTransactionModel.findOne({ _id: id })
    .lean()
    .exec();
};
