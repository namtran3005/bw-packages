import { CryptoTaxDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoTaxModel } from '../model';

export const findByYear = async ({
  owner,
  reportYear,
}: {
  owner: string;
  reportYear: number;
}): Promise<DocumentDefinition<CryptoTaxDoc> | null> => {
  return CryptoTaxModel.findOne({
    owner,
    reportYear,
    deletedAt: { $exists: false },
  })
    .lean()
    .exec();
};
