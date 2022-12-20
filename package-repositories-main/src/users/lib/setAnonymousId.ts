import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const setAnonymousId = (
  userId: string,
  anonymousId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        anonymousId,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
