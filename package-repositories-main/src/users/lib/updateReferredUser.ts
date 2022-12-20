import { ReferredUser } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const updateReferredUser = (
  userId: string,
  referredUser: ReferredUser
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    {
      _id: userId,
      referredUsers: { $elemMatch: { userId: referredUser.userId } },
    },
    { $set: { 'referredUsers.$': referredUser } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
