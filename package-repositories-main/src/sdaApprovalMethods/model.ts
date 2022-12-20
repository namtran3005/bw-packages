import mongooseLeanId from 'mongoose-lean-id';
import {
  sdaApprovalMethodSchema,
  SdaApprovalMethodDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sdaApprovalMethodSchema.plugin(mongooseLeanId);

export const SdaApprovalMethodModel = mainConnection.db.model<
  SdaApprovalMethodDoc
>('SdaApprovalMethods', sdaApprovalMethodSchema);
