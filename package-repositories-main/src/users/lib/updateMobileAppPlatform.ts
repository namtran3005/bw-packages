import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../model';

export interface IOSFlag {
  iosInstalled: boolean;
}
export interface AndroidFlag {
  androidInstalled: boolean;
}

export const updateMobileAppPlatform = (
  userId: string,
  platformInstallData: IOSFlag | AndroidFlag
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: platformInstallData },
    { runValidators: true }
  )
    .lean()
    .exec();
};
