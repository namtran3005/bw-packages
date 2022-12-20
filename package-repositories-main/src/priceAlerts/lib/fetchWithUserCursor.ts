import { Types } from 'mongoose';
import { PriceAlertsModel } from '../model';

/**
 * Fetch manual/user price alerts populated with
 * user objects {id, locale, pushNotificationsConfigs}
 */
export const fetchWithUserCursor = (
  ids: string[],
  alertTypePNEventMap: Record<string, string>,
  batchSize: number
) => {
  const wrappedIds = ids.map(id => Types.ObjectId(id));

  return PriceAlertsModel.aggregate([
    {
      $match: { _id: { $in: wrappedIds } },
    },
    {
      $project: {
        id: { $toString: '$_id' },
        value: 1,
        type: 1,
        triggerType: 1,
        user: '$userId',
        _id: 0,
        alertTypePNEventMap: {
          $objectToArray: alertTypePNEventMap,
        },
      },
    },
    {
      $addFields: {
        eventType: {
          $arrayElemAt: [
            '$alertTypePNEventMap.v',
            {
              // find push notifications event type based on alert type
              $indexOfArray: ['$alertTypePNEventMap.k', '$type'],
            },
          ],
        },
      },
    },
    {
      $lookup: {
        from: 'users',
        let: { user: { $toObjectId: '$user' }, eventType: '$eventType' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$_id', '$$user'] },
                  { $ne: ['$frozen', true] },
                  {
                    $not: {
                      $in: ['$$eventType', '$disabledPushNotifications'],
                    },
                  },
                ],
              },
            },
          },
          {
            $project: {
              id: { $toString: '$_id' },
              locale: 1,
              pushNotificationsConfigs: 1,
              _id: { $toString: '$_id' },
            },
          },
        ],
        as: 'user',
      },
    },
    {
      $project: {
        alertTypePNEventMap: 0,
        eventType: 0,
      },
    },
    {
      $unwind: '$user',
    },
  ])
    .cursor({ batchSize })
    .exec();
};
