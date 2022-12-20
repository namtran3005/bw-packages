import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../model';

export const toggleClosureRequested = (
  userId: string,
  closureRequested: boolean,
  closureRequestReason: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { closureRequested, closureRequestReason } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
