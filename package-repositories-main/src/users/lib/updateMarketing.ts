import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const updateMarketing = (
  userId: string,
  marketing: boolean
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { marketing } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
