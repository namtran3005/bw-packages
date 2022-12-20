import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const updateDisabledNotifications = (
  userId: string,
  fieldsToSet: {
    disabledPushNotifications?: string[];
    disabledEmailNotifications?: string[];
  }
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: fieldsToSet,
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
