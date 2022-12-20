import mongooseLeanId from 'mongoose-lean-id';
import {
  usersSchema,
  UserDoc as UserDocType,
  ProfileDoc as ProfileDocType,
  EmailDoc as EmailDocType,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export { emailSchema } from '@bitwala-cryptobank-squad/package-schemas';
export type UserDoc = UserDocType;
export type ProfileDoc = ProfileDocType;
export type EmailDoc = EmailDocType;

usersSchema.plugin(mongooseLeanId);

export const UserModel = mainConnection.db.model<UserDoc>('User', usersSchema);
