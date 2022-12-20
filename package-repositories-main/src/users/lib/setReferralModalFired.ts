import { UserModel } from '../../users/model';

export const setReferralModalFired = async (userId: string) => {
  return UserModel.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $set: { referralModalFired: true },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
