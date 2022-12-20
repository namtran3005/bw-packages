import { CryptoLendingTransactionModel } from '../../cryptoLendingTransactions';
import { TransactionModel } from '../model';

export const deleteManyCryptoLendingTxs = (itemIds: string[]) => {
  return TransactionModel.deleteMany({
    domain: CryptoLendingTransactionModel.collection.name,
    itemId: { $in: itemIds },
  }).exec();
};
