
import { SolarisRecentScaModel } from "../model";

export const insertOrUpdate = (owner: string, deviceId: string) => {
  return SolarisRecentScaModel.findOneAndUpdate(
    {
      owner,
      deviceId,
    }, {},
    {
      new: true,
      upsert: true,
      runValidators: true,
    }
  )
    .lean()
    .exec();
};
