import mongooseLeanId from 'mongoose-lean-id';
import {
  clearingTransactionsSchema,
  ClearingTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

clearingTransactionsSchema.plugin(mongooseLeanId);

export const ClearingTransactionModel = mainConnection.db.model<
  ClearingTransactionDoc
>('ClearingTransactions', clearingTransactionsSchema);
