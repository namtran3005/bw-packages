import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisMobileNumberSchema,
  SolarisMobileNumberDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisMobileNumberSchema.plugin(mongooseLeanId);

export const SolarisMobileNumberModel = mainConnection.db.model<
  SolarisMobileNumberDoc
>('SolarisMobileNumbers', solarisMobileNumberSchema);
