import { UserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getUserByVerifiedEmail = (
  email: string
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOne({
    emails: {
      $elemMatch: {
        address: email,
        verified: true,
      },
    },
  })
    .lean()
    .exec();
};
