import mongooseLeanId from 'mongoose-lean-id';
import {
  bitcoinTransactionSchema,
  BitcoinTransactionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

bitcoinTransactionSchema.plugin(mongooseLeanId);

export const BitcoinTransactionModel = mainConnection.db.model<
  BitcoinTransactionDoc
>('BitcoinTransactions', bitcoinTransactionSchema);
