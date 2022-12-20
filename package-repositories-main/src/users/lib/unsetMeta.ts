import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const unsetMeta = (userId: string): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate({ _id: userId }, { $unset: { meta: '' } })
    .lean()
    .exec();
};
