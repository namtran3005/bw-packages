import {
  EthereumTransaction,
  TransactionStatus,
} from '@bitwala-cryptobank-squad/package-schemas';
import { EthereumTransactionModel } from '../model';

export const findPendingTxs = (args: {
  walletId: string;
}): Promise<EthereumTransaction[]> => {
  const { walletId } = args;

  return EthereumTransactionModel.find({
    walletId,
    state: TransactionStatus.PENDING,
  })
    .lean()
    .exec();
};
