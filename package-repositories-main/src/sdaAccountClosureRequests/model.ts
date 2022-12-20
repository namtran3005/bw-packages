import mongooseLeanId from 'mongoose-lean-id';
import {
  sdaAccountClosureRequestSchema,
  SdaAccountClosureRequestDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sdaAccountClosureRequestSchema.plugin(mongooseLeanId);

export const SdaAccountClosureRequestModel = mainConnection.db.model<
  SdaAccountClosureRequestDoc
>('SdaAccountClosureRequests', sdaAccountClosureRequestSchema);
