import { TransactionStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { EthereumTransactionModel } from '../model';

export const findCompletedByMissingCScore = () =>
  EthereumTransactionModel.find({
    cscore: null,
    isSynced: true,
    state: TransactionStatus.COMPLETE,
  })
    .lean()
    .exec();
