import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const verifyUser = (userId: string): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { isVerified: true, verifiedAt: new Date() } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
