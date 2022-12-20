import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const attachReferralCode = (
  userId: string,
  referralCodeTalonOneOwn: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { referralCodeTalonOneOwn } },
    { runValidators: true }
  )
    .lean()
    .exec();
};
