import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../model';

// freeze a user to prevent logins
export const toggleFreeze = (
  userId: string,
  frozen: boolean,
  frozenReason: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { frozen, frozenAt: new Date(), frozenReason } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
