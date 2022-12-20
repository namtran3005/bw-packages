import mongooseLeanId from 'mongoose-lean-id';
import {
  sdaApprovalRequestSchema,
  SdaApprovalRequestDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

sdaApprovalRequestSchema.plugin(mongooseLeanId);

export const SdaApprovalRequestModel = mainConnection.db.model<
  SdaApprovalRequestDoc
>('SdaApprovalRequests', sdaApprovalRequestSchema);
