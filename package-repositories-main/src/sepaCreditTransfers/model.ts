import mongooseLeanId from 'mongoose-lean-id';
import {
  sepaCreditTransferSchema,
  SepaCreditTransferDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sepaCreditTransferSchema.plugin(mongooseLeanId);

export const SepaCreditTransferModel = mainConnection.db.model<
  SepaCreditTransferDoc
>('SepaCreditTransfers', sepaCreditTransferSchema);
