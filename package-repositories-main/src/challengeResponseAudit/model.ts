import mongooseLeanId from 'mongoose-lean-id';
import {
  challengeResponseAuditSchema,
  ChallengeResponseAuditDoc,
  ChallengeResponsePurpose,
  ChallengeResponseStatus,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';
export { ChallengeResponsePurpose, ChallengeResponseStatus };

challengeResponseAuditSchema.plugin(mongooseLeanId);

export const ChallengeResponseAuditModel = mainConnection.db.model<
  ChallengeResponseAuditDoc
>('ChallengeResponseAudit', challengeResponseAuditSchema);
