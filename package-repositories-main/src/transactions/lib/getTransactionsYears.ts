import { TransactionAreas } from '@bitwala-cryptobank-squad/package-schemas';
import { TransactionModel } from '../model';
export interface GetTransactionsYears {
  _id: null;
  tradedYears: number[];
}
export const getTransactionsYears = async (
  userId: string
): Promise<GetTransactionsYears[]> => {
  return TransactionModel.aggregate([
    {
      $match: {
        owner: userId,
        deletedAt: { $exists: false },
        area: {
          $in: [
            TransactionAreas.TRADE,
            TransactionAreas.CRYPTO_LENDING,
            TransactionAreas.CRYPTO_TRANSACTION,
          ],
        },
      },
    },
    {
      $project: {
        year: { $year: '$createdAt' },
      },
    },
    {
      $group: {
        _id: null,
        tradedYears: { $addToSet: '$year' },
      },
    },
  ]).exec();
};
