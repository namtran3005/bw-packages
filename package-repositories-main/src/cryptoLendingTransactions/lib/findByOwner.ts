import { CryptoLendingTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export const findByOwner = (
  owner: string,
  limit?: number
): Promise<DocumentDefinition<CryptoLendingTransactionDoc>[]> => {
  if (limit) {
    return CryptoLendingTransactionModel.find({
      owner,
    })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean()
      .exec();
  }
  return CryptoLendingTransactionModel.find({
    owner,
  })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
};
