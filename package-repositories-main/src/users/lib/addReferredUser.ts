import { ReferredUser } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const addReferredUser = (
  userId: string,
  referredUser: ReferredUser
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $addToSet: { referredUsers: referredUser },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
