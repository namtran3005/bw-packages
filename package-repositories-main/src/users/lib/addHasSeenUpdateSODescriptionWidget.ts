import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../model';

export const addHasSeenUpdateSODescriptionWidget = (
  userId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        hasSeenUpdateSODescriptionWidget: true,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
