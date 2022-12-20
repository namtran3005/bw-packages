import { UserDoc, KycReminderDetails } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const setKycReminder = (
  userId: string,
  details: KycReminderDetails
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        kycReminder: details,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
