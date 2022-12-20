import { CryptoLendingTransactionModel } from '../model';

export const deleteManyByIds = (ids: string[]) => {
  return CryptoLendingTransactionModel.deleteMany({ _id: { $in: ids } }).exec();
};
