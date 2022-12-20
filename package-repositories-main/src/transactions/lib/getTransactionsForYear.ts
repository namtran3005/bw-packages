import {
  TransactionAreas,
  TransactionDoc,
  TransactionStatus,
} from '@bitwala-cryptobank-squad/package-schemas';
import { endOfYear, startOfYear } from 'date-fns';
import { berlinTimeToUTC } from '@bitwala-cryptobank-squad/package-utils';
import { TransactionModel } from '../model';

export const getTransactionsForYear = async (
  owner: string,
  years: number[]
): Promise<TransactionDoc[] | null> => {
  const startYear = Math.min(...years);
  const endYear = Math.max(...years);
  const startYearDate = new Date().setFullYear(startYear);
  const endYearDate = new Date().setFullYear(endYear);

  return TransactionModel.find({
    $and: [
      {
        transactionTime: { $gte: berlinTimeToUTC(startOfYear(startYearDate)) },
      },
      {
        transactionTime: { $lte: berlinTimeToUTC(endOfYear(endYearDate)) },
      },
    ],
    owner,
    status: TransactionStatus.COMPLETE,
    area: {
      $in: [
        TransactionAreas.TRADE,
        TransactionAreas.CRYPTO_TRANSACTION,
        TransactionAreas.CRYPTO_LENDING,
      ],
    },
    deletedAt: { $exists: false },
  })
    .sort({ transactionTime: 1 })
    .exec();
};
