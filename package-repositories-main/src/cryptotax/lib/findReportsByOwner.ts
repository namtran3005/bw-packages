import { CryptoTaxDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { CryptoTaxModel } from '../model';

interface Selector {
  owner: string;
  reportYear?: {
    $gte: number;
    $lte: number;
  };
  deletedAt: {
    $exists: boolean;
  };
}

export const findReportsByOwner = async ({
  owner,
  startYear,
  endYear,
}: {
  owner: string;
  startYear?: number;
  endYear?: number;
}): Promise<DocumentDefinition<CryptoTaxDoc>[]> => {
  const selector: Selector = { owner, deletedAt: { $exists: false } };

  if (startYear && endYear) {
    selector.reportYear = { $gte: startYear, $lte: endYear };
  }

  return CryptoTaxModel.find(selector).lean().exec();
};
