import { CryptoTaxDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoTaxModel } from '../model';

export const findReportById = async ({
  owner,
  requestId,
}: {
  owner: string;
  requestId: string;
}): Promise<DocumentDefinition<CryptoTaxDoc> | null> => {
  return CryptoTaxModel.findOne({
    owner,
    reportId: requestId,
    deletedAt: { $exists: false },
  })
    .lean()
    .exec();
};
