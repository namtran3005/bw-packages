import mongooseLeanId from 'mongoose-lean-id';
import {
  cryptoLendingAccountSchema,
  CryptoLendingAccountDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

cryptoLendingAccountSchema.plugin(mongooseLeanId);

export const CryptoLendingAccountModel = mainConnection.db.model<
  CryptoLendingAccountDoc
>('CryptoLendingAccounts', cryptoLendingAccountSchema);
