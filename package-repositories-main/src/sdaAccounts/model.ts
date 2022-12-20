import mongooseLeanId from 'mongoose-lean-id';
import { sdaAccountSchema, SdaAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sdaAccountSchema.plugin(mongooseLeanId);

export const SdaAccountModel = mainConnection.db.model<SdaAccountDoc>(
  'SdaAccount',
  sdaAccountSchema
);
