import { UserModel } from "../model";

export const updateRollingTradingVolume = async (
  owner: string,
  amount: number
) => {
  return UserModel.findOneAndUpdate(
    {
      _id: owner,
    },
    {
      $set: {
        rollingTradingVolume: amount,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
