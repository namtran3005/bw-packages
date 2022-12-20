import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const updateSdaEntityId = (
  userId: string,
  sdaEntityId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate({ _id: userId }, { $set: { sdaEntityId } })
    .lean()
    .exec();
};
