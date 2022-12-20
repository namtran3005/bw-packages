import {
  CryptoTaxDoc, CryptoTaxRequestStatuses
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoTaxModel } from '../model';

export const updateState = (
  reportId: string,
  status: CryptoTaxRequestStatuses
): Promise<DocumentDefinition<CryptoTaxDoc> | null> => {
  return CryptoTaxModel.findOneAndUpdate(
    { reportId, deletedAt: { $exists: false } },
    { $set: { status } },
    {
      new: true,
      runValidators: true,
    }
  )
    .lean()
    .exec();
};
