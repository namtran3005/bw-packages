import { DocumentDefinition } from 'mongoose';

import { UserDoc, UserModel } from '../../users/model';

export const setCddEmailSentAt = (
  userId: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { cddEmailSentAt: new Date() } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
