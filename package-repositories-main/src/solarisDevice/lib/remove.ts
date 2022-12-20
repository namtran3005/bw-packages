import { SolarisDeviceModel } from '../model';

export const remove = async (selector: {
  owner: string;
  deviceId: string;
}): Promise<boolean> => {
  const result = await SolarisDeviceModel.findOneAndUpdate(
    {
      ...selector,
    },
    { $set: { deletedAt: new Date() } },
    {
      new: true,
      runValidators: true,
    }
  )
    .lean()
    .exec();

  return result !== null;
};
