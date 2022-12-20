import mongooseLeanId from 'mongoose-lean-id';
import { lockSchema, LockDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

lockSchema.plugin(mongooseLeanId);

export const LockModel = mainConnection.db.model<LockDoc>('Lock', lockSchema);
