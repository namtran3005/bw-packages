import {
  CryptoLendingAccountDoc,
  CryptoLendingKycStatus
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingAccountModel } from '../model';

export const paginate = (
  offset: number,
  limit: number,
  kycStatus: CryptoLendingKycStatus
): Promise<DocumentDefinition<CryptoLendingAccountDoc>[]> => {
  return CryptoLendingAccountModel.find({
    kycStatus,
  })
    .sort({ createdAt: 1 })
    .skip(offset)
    .limit(limit)
    .lean()
    .exec();
};
