import { UserDoc, KycReminderStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const setKycReminderStatus = (
  userId: string,
  status: KycReminderStatus
): Promise<DocumentDefinition<UserDoc> | null> => {
  return UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $set: {
        'kycReminder.status': status,
      },
    },
    { runValidators: true }
  )
    .lean()
    .exec();
};
