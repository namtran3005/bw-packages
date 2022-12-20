import mongooseLeanId from 'mongoose-lean-id';
import {
  sdaTransactionSchema,
  SdaTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sdaTransactionSchema.plugin(mongooseLeanId);

export const SdaTransactionModel = mainConnection.db.model<SdaTransactionDoc>(
  'SdaTransactions',
  sdaTransactionSchema
);
