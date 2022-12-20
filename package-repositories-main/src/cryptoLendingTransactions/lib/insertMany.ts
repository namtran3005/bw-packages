import {
  CryptoLendingSDADeposit,
  CryptoLendingBitgoDeposit,
  CryptoLendingInterest,
  CryptoLendingWithdrawal,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoLendingTransactionModel } from '../model';

export const insertMany = (
  txs:
    | CryptoLendingInterest[]
    | CryptoLendingSDADeposit[]
    | CryptoLendingBitgoDeposit[]
    | CryptoLendingWithdrawal[]
) => {
  return CryptoLendingTransactionModel.insertMany(txs);
};
