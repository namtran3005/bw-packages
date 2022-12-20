import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserByReferralCodeTalonOneOwn = (
  referralCodeTalonOneOwn: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOne({ referralCodeTalonOneOwn })
    .lean()
    .exec();
};
