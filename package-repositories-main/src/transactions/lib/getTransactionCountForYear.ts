import { TransactionAreas, TransactionStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { endOfYear, startOfYear } from 'date-fns';
import { berlinTimeToUTC } from '@bitwala-cryptobank-squad/package-utils';
import { TransactionModel } from '../model';

const TAX_REPORT_BACK_YEARS = 4;

export const getTransactionCountForYear = async (
  owner: string,
  year: number
): Promise<number> => {
  const yearDateStart = new Date().setFullYear(year - TAX_REPORT_BACK_YEARS);
  const yearDateEnd = new Date().setFullYear(year);

  return TransactionModel.countDocuments({
    $and: [
      {
        transactionTime: { $gte: berlinTimeToUTC(startOfYear(yearDateStart)) },
      },
      {
        transactionTime: { $lte: berlinTimeToUTC(endOfYear(yearDateEnd)) },
      },
    ],
    owner,
    status: TransactionStatus.COMPLETE,
    area: {
      $in: [
        TransactionAreas.TRADE,
        TransactionAreas.CRYPTO_TRANSACTION,
        TransactionAreas.SOLARIS_BOOKING,
        TransactionAreas.CRYPTO_LENDING,
      ],
    },
    deletedAt: { $exists: false },
  }).exec();
};
