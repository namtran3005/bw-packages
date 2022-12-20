import mongooseLeanId from 'mongoose-lean-id';
import {
  userTutorialsSchema,
  UserTutorialsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

userTutorialsSchema.plugin(mongooseLeanId);

export const UserTutorialsModel = mainConnection.db.model<UserTutorialsDoc>(
  'UserTutorials',
  userTutorialsSchema
);
