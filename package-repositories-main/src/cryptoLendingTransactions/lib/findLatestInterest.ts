import {
  CryptoLendingTransactionDoc,
  CryptoLendingTransactionType,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export const findLatestInterest = (
  owner: string
): Promise<DocumentDefinition<CryptoLendingTransactionDoc> | null> => {
  return CryptoLendingTransactionModel.findOne({
    owner,
    type: CryptoLendingTransactionType.INTEREST,
  })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
};
