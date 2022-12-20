import mongooseLeanId from 'mongoose-lean-id';

import {
  upvestVerifiedHostSchema,
  UpvestVerifiedHostDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

upvestVerifiedHostSchema.plugin(mongooseLeanId);

export const UpvestVerifiedHostModel = mainConnection.db.model<
  UpvestVerifiedHostDoc
>('UpvestVerifiedHosts', upvestVerifiedHostSchema);
