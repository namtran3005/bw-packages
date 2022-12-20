import { EmailDocOld } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserDoc, UserModel } from '../../users/model';

export const updateEmail = (
  userId: string,
  newEmailAddress: string,
  oldEmail: EmailDocOld
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        emails: [{ address: newEmailAddress.toLowerCase(), verified: true }],
      },
      $push: { emailsOld: oldEmail },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
