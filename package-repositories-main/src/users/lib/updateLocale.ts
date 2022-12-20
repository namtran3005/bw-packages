import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

// freeze a user to prevent logins
export const updateLocale = (
  userId: string,
  locale: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { locale } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
