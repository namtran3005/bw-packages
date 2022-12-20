import { NotificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { NotificationsModel } from '../model';

export const fetchByEvent = ({
  event,
  createdAt,
}: {
  createdAt: {
    startTime: Date;
    endTime: Date;
  };
  event: string;
}): Promise<Array<Partial<NotificationDoc>>> =>
  NotificationsModel.find(
    {
      event,
      createdAt: {
        $gte: createdAt.startTime,
        $lte: createdAt.endTime,
      },
    },
    { userId: 1 }
  )
    .lean()
    .exec();
