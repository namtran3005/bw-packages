import { TransactionStatus } from '@bitwala-cryptobank-squad/package-utils';
import { CryptoLendingTransactionModel } from '../model';

export const countByOwnerAndStatus = (
  owner: string,
  status: TransactionStatus
): Promise<number> => {
  return CryptoLendingTransactionModel.countDocuments({
    owner,
    status,
  }).exec();
};
