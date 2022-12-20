import mongooseLeanId from 'mongoose-lean-id';
import { sdaAddressSchema, SdaAddressDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sdaAddressSchema.plugin(mongooseLeanId);

export const SdaAddressModel = mainConnection.db.model<SdaAddressDoc>(
  'SdaAddresses',
  sdaAddressSchema
);
