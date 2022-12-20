import {
  ChallengeResponseAuditDoc,
  ChallengeResponseStatus
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { ChallengeResponseAuditModel } from '../model';

export const findOneInitiated = (selector: {
  owner: string;
  deviceId: string;
  challenge: string;
}): Promise<DocumentDefinition<ChallengeResponseAuditDoc> | null> => {
  return ChallengeResponseAuditModel.findOne({
    ...selector,
    status: ChallengeResponseStatus.INITIATED,
  })
    .lean()
    .exec();
};
