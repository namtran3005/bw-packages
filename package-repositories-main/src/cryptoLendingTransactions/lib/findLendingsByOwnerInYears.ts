import { CryptoLendingTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { berlinTimeToUTC, TransactionStatus } from '@bitwala-cryptobank-squad/package-utils';
import { endOfYear, startOfYear } from 'date-fns';
import { DocumentDefinition } from 'mongoose';
import { CryptoLendingTransactionModel } from '../model';

export interface Filter {
  from: number;
  to: number;
}

export const findLendingsByOwnerInYears = (
  owner: string,
  { from, to }: Filter
): Promise<DocumentDefinition<CryptoLendingTransactionDoc>[]> => {
  if (!from || !to) {
    throw new Error('Missing years');
  }
  const startYearDate = new Date().setFullYear(from);
  const endYearDate = new Date().setFullYear(to);

  return CryptoLendingTransactionModel.find({
    owner,
    status: TransactionStatus.COMPLETE,
    $and: [
      {
        createdAt: { $gt: berlinTimeToUTC(startOfYear(startYearDate)) },
      },
      { createdAt: { $lt: berlinTimeToUTC(endOfYear(endYearDate)) } },
    ],
  })
    .lean()
    .exec();
};
