import { ScaChallengeDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { ScaChallengeModel } from '../model';

export const findPendingByOwner = (
  owner: string
): Promise<DocumentDefinition<ScaChallengeDoc> | null> => {
  const now = new Date();
  return ScaChallengeModel.findOne({
    owner,
    expiresAt: {
      $gt: now,
    },
    changeRequestInitiatedAt: null,
  })
    .sort({ expiresAt: -1 })
    .lean()
    .exec();
};
