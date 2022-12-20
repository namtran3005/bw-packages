import { PushNotificationsConfig } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const addPushNotificationsConfig = (
  userId: string,
  pushNotificationsConfig: PushNotificationsConfig
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $addToSet: { pushNotificationsConfigs: pushNotificationsConfig } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
