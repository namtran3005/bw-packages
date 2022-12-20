import {
  TransactionInputCryptoLendingDeposit,
  TransactionAreas,
  CryptoLendingTransactionType,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoLendingTransactionModel } from '../../cryptoLendingTransactions';
import { TransactionModel } from '../model';

export const insertManyCryptoLendingDeposits = (
  txs: Omit<TransactionInputCryptoLendingDeposit, 'meta' | 'domain' | 'area'>[]
) => {
  const inputs: TransactionInputCryptoLendingDeposit[] = txs.map((tx) => {
    return {
      ...tx,
      domain: CryptoLendingTransactionModel.collection.name,
      area: TransactionAreas.CRYPTO_LENDING,
      meta: {
        cryptoLendingTxType: CryptoLendingTransactionType.DEPOSIT,
      },
    };
  });

  return TransactionModel.insertMany(inputs);
};
