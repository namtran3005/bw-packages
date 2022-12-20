import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const updateMeta = (
  userId: string,
  meta: object
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { meta } },
    { runValidators: true, new: true }
  )
    .lean()
    .exec();
};
