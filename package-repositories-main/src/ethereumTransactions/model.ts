import mongooseLeanId from 'mongoose-lean-id';
import {
  ethereumTransactionSchema,
  EthereumTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

ethereumTransactionSchema.plugin(mongooseLeanId);

export const EthereumTransactionModel = mainConnection.db.model<
  EthereumTransactionDoc
>('EthereumTransactions', ethereumTransactionSchema);
