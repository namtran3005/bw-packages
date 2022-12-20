import { Types } from 'mongoose';
import { UserModel } from '../../users/model';
import { createProjection } from '../../utils';
import { FetchUsersToNotifyInput } from './fetchUsersToNotifyBatchedCursor';

export const fetchUsersToNotifyWithCursor = ({
  triggeredAt,
  event,
  projectionFields,
  idsToMatch,
  batchSize,
}: FetchUsersToNotifyInput) => {
  const $and: unknown[] = [
    { $ne: ['$frozen', true] },
    { $eq: [{ $ifNull: ['$isVerified', false] }, true] },
    {
      $lt: [`$receivedPushNotifications.${event}`, triggeredAt.after],
    },
    {
      $not: {
        // if the array doesn't exist, the user shouldn't receive a price alert
        // fake array with '[event]' for this expression
        $in: [event, { $ifNull: ['$disabledPushNotifications', [event]] }],
      },
    },
  ];

  if (idsToMatch?.length) {
    $and.push({ $in: ['$_id', idsToMatch.map(el => new Types.ObjectId(el))] });
  }

  const outProjection = createProjection(projectionFields as string[]);

  return UserModel.aggregate([
    {
      $match: {
        $expr: {
          $and,
        },
        pushNotificationsConfigs: { $exists: true },
      },
    },
    {
      $project: outProjection,
    },
  ])
    .cursor({ batchSize })
    .exec();
};
