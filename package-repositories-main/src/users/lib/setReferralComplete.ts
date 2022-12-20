import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../model';

export const setReferralComplete = (
  userId: string,
  hasCompletedReferral: boolean
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    {
      _id: userId,
    },
    { $set: { hasCompletedReferral } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
