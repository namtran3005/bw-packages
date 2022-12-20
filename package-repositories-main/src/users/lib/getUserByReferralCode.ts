import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserByReferralCode = (
  referralCode: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOne({ referralCode })
    .lean()
    .exec();
};
