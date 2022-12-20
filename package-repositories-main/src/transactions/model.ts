import mongooseLeanId from 'mongoose-lean-id';
import mongooseLeanGetters from 'mongoose-lean-getters';
import { transactionSchema, TransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

transactionSchema.plugin(mongooseLeanGetters);
transactionSchema.plugin(mongooseLeanId);

export const TransactionModel = mainConnection.db.model<TransactionDoc>(
  'Transactions',
  transactionSchema
);
