import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const setIsOnboardedInMobile = (
  userId: string,
  isOnboardedInMobile: boolean | null
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        isOnboardedInMobile,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
