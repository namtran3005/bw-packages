import mongooseLeanId from 'mongoose-lean-id';
import {
  userActionLogsSchema,
  UserActionLogDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

userActionLogsSchema.plugin(mongooseLeanId);

export const UserActionLogModel = mainConnection.db.model<UserActionLogDoc>(
  'UserActionLog',
  userActionLogsSchema
);
