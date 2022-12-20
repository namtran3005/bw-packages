import mongooseLeanId from 'mongoose-lean-id';
import {
  bitcoinWalletSchema,
  BitcoinWalletDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

bitcoinWalletSchema.plugin(mongooseLeanId);

export const BitcoinWalletModel = mainConnection.db.model<BitcoinWalletDoc>(
  'BitcoinWallets',
  bitcoinWalletSchema
);
