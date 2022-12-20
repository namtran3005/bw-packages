import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const disableSegmentEvent = (
  userId: string,
  segmentEvent: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $addToSet: {
        segmentDisabledEvents: segmentEvent,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
