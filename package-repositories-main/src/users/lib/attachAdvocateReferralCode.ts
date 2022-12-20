import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const attachAdvocateReferralCode = (
  userId: string,
  referralCodeTalonOneAdvocate: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { referralCodeTalonOneAdvocate } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
