import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisTaxIdentificationSchema,
  SolarisTaxIdentificationDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisTaxIdentificationSchema.plugin(mongooseLeanId);

export const SolarisTaxIdentificationModel = mainConnection.db.model<
  SolarisTaxIdentificationDoc
>('SolarisTaxIdentifications', solarisTaxIdentificationSchema);
