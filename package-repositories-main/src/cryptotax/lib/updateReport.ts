import {
  CryptoTaxDoc,
  CryptoTaxRequestStatuses,
  TaxReport,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoTaxModel } from '../model';

export const updateReport = (
  reportId: string,
  status: CryptoTaxRequestStatuses,
  taxReport: TaxReport
): Promise<DocumentDefinition<CryptoTaxDoc> | null> => {
  return CryptoTaxModel.findOneAndUpdate(
    { reportId, deletedAt: { $exists: false } },
    { $set: { status, taxReport } },
    {
      new: true,
      runValidators: true,
    }
  )
    .lean()
    .exec();
};
