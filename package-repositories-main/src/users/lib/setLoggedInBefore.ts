import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const setLoggedInBefore = (userId: string): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { loggedInBefore: true } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
