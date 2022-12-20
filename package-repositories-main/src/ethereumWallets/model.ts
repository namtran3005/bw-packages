import mongooseLeanId from 'mongoose-lean-id';
import {
  ethereumWalletSchema,
  EthereumWalletDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

ethereumWalletSchema.plugin(mongooseLeanId);

export const EthereumWalletModel = mainConnection.db.model<EthereumWalletDoc>(
  'EthereumWallets',
  ethereumWalletSchema
);
