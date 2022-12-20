import { SolarisDeviceChallengeModel } from '../model';

export const markAsVerified = async (challengeId: string): Promise<boolean> => {
  const result = await SolarisDeviceChallengeModel.findOneAndUpdate(
    {
      challengeId,
    },
    {
      $set: { successfullyVerifiedAt: new Date() },
    },
    { runValidators: true }
  )
    .lean()
    .exec();

  return Boolean(result);
};
