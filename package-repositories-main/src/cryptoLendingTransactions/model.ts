import mongooseLeanId from 'mongoose-lean-id';
import {
  cryptoLendingTransactionSchema,
  CryptoLendingTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

cryptoLendingTransactionSchema.plugin(mongooseLeanId);

export const CryptoLendingTransactionModel = mainConnection.db.model<
  CryptoLendingTransactionDoc
>('CryptoLendingTransactions', cryptoLendingTransactionSchema);
