import mongooseLeanId from 'mongoose-lean-id';
import {
  ineligibleUsersSchema,
  IneligibleUserDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

ineligibleUsersSchema.plugin(mongooseLeanId);

export const IneligibleUserModel = mainConnection.db.model<IneligibleUserDoc>(
  'IneligibleUser',
  ineligibleUsersSchema
);
