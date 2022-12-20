import { ScaChallengeDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { ScaChallengeModel } from '../model';

export const markChangeRequestInitiated = (
  id: string
): Promise<DocumentDefinition<ScaChallengeDoc> | null> => {
  return ScaChallengeModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        changeRequestInitiatedAt: new Date(),
      },
    },
    {
      runValidators: true,
    }
  )
    .lean()
    .exec();
};
