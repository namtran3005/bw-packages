import { PushNotificationsConfig } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const removePushNotificationsConfig = (
  userId: string,
  pushNotificationConfigSelector: Partial<PushNotificationsConfig>
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $pull: { pushNotificationsConfigs: pushNotificationConfigSelector } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
