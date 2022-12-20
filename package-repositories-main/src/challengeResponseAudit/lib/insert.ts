import {
  ChallengeResponseAuditSchema,
  ChallengeResponseAuditDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { ChallengeResponseAuditModel } from '../model';

export const insert = (
  data: ChallengeResponseAuditSchema
): Promise<ChallengeResponseAuditDoc> => {
  return ChallengeResponseAuditModel.create(data);
};
