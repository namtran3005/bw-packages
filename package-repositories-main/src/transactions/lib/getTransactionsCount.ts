import { TransactionDoc, TransactionAreas } from '@bitwala-cryptobank-squad/package-schemas';
import { TransactionModel } from '../model';

type Selector = Partial<
  Omit<TransactionDoc, 'area'> & {
    area:
      | { [key: string]: TransactionAreas | TransactionAreas[] }
      | TransactionAreas;
    'primaryAmount.value': { [key: string]: number };
  }
>;

export const getTransactionsCount = async (
  selector: Selector
): Promise<number> => {
  return TransactionModel.countDocuments({
    ...selector,
    deletedAt: { $exists: false },
  }).exec();
};
