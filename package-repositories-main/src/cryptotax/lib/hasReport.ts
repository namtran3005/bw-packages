import { CryptoTaxRequestStatuses } from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoTaxModel } from '../model';

export const hasReport = async ({
  owner,
  reportYear,
}: {
  owner: string;
  reportYear: string;
}): Promise<boolean> => {
  const count = await CryptoTaxModel.countDocuments({
    owner,
    reportYear,
    status: {
      $in: [
        CryptoTaxRequestStatuses.INITIATED,
        CryptoTaxRequestStatuses.COMPLETED,
      ],
    },
    deletedAt: { $exists: false },
  });
  return count > 0;
};
