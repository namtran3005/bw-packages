import { UserModel } from '../../users/model';

export const dismissFraudWarning = async (userId: string) => {
  return UserModel.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $set: { isFraudWarningChecked: true },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
