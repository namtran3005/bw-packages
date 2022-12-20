import mongooseLeanId from 'mongoose-lean-id';
import {
  userSpecialPurposeAddressSchema,
  UserSpecialPurposeAddressDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

userSpecialPurposeAddressSchema.plugin(mongooseLeanId);

export const UserSpecialPurposeAddressModel = mainConnection.db.model<UserSpecialPurposeAddressDoc>(
  'UserSpecialPurposeAddresses',
  userSpecialPurposeAddressSchema
);
