import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../model';

export const getAllUserIdsByEvent = (
  eventType: string
): Promise<DocumentDefinition<UserDoc>[]> => {
  return UserModel.find(
    {
      pushNotificationsConfigs: { $exists: true, $not: { $size: 0 } },
      disabledPushNotifications: { $nin: [eventType] },
    },
    { id: 1, locale: 1 }
  )
    .lean()
    .exec();
};
