import { UserDevicePairsModel, DevicePairingStatus } from '../model';

export const unpair = async (selector: {
  owner: string;
  deviceId: string;
}): Promise<boolean> => {
  //find many and update status to inactive
  const result = await UserDevicePairsModel.updateMany(
    {
      ...selector,
      status: DevicePairingStatus.ACTIVE,
    },
    {
      $set: { status: DevicePairingStatus.INACTIVE },
    }
  )
    .lean()
    .exec();

  return result !== null;
};
