import { GlobalPushNotificationEvent } from '@bitwala-cryptobank-squad/package-schemas';
import { UserModel } from '../../users/model';

export const updateReceivedPushNotificationsField = async (
  userIds: string[],
  event: GlobalPushNotificationEvent
) => {
  return UserModel.updateMany(
    {
      _id: { $in: userIds },
    },
    {
      $set: { [`receivedPushNotifications.${event}`]: new Date() },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
