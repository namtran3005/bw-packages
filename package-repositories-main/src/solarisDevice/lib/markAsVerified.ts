import { SolarisDeviceModel } from '../model';

export const markAsVerified = async (deviceId: string): Promise<boolean> => {
  const result = await SolarisDeviceModel.findOneAndUpdate(
    {
      deviceId,
    },
    { $set: { successfullyVerifiedAt: new Date() } },
    {
      new: false,
      runValidators: true,
    }
  )
    .lean()
    .exec();

  return result !== null;
};
