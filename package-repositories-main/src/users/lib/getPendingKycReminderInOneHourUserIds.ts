import {
  KycReminderStatus,
  KycReminderType,
  UserDoc
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserModel } from '../model';

export const getPendingKycReminderInOneHourUserIds = ({
  lte,
  gte,
}: {
  lte: Date;
  gte: Date;
}): Promise<DocumentDefinition<UserDoc>[]> => {
  return UserModel.find(
    {
      'kycReminder.fireDate': {
        $gte: gte,
        $lte: lte,
      },
      'kycReminder.type': KycReminderType.IN_ONE_HOUR,
      'kycReminder.status': { $ne: KycReminderStatus.TRIGGERED },
    },
    { id: 1 }
  )
    .lean()
    .exec();
};
