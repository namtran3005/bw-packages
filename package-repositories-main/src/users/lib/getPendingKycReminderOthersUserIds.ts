import {
  KycReminderStatus,
  KycReminderType,
  UserDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getPendingKycReminderOthersUserIds = ({
  date,
}: {
  date: Date;
}): Promise<DocumentDefinition<UserDoc>[]> => {
  return UserModel.find(
    {
      'kycReminder.fireDate': date,
      'kycReminder.type': { $nin: [KycReminderType.IN_ONE_HOUR] },
      'kycReminder.status': { $ne: KycReminderStatus.TRIGGERED },
    },
    { id: 1 }
  )
    .lean()
    .exec();
};
