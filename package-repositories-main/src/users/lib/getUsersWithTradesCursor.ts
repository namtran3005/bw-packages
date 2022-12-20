import { Document, QueryCursor, Types } from 'mongoose';
import { UserModel } from '../model';
import { createBatchedCursor } from '../../utils';

export const getUsersWithTradesCursor = (
  batchSize: number,
  userIds?: string[]
) => {
  let selector;
  if (userIds?.length) {
    selector = {
      tradedEUR: {
        $gt: 0,
      },
      _id: {
        $in: userIds.map((id) => Types.ObjectId(id)),
      },
    };
  } else {
    selector = {
      tradedEUR: {
        $gt: 0,
      },
    };
  }

  const userIdsCursor = UserModel.aggregate([
    {
      $match: selector,
    },
    {
      $group: {
        _id: null,
        users: {
          $push: {
            k: {
              $toString: '$_id',
            },
            v: {
              tradedEUR: '$tradedEUR',
              tradingLimit: '$tradingLimit',
            },
          },
        },
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $arrayToObject: '$users',
        },
      },
    },
  ])
    .cursor({ batchSize })
    .exec() as QueryCursor<
    Document & Record<string, { tradedEUR: number; tradingLimit: number }>
  >;

  return createBatchedCursor(userIdsCursor, batchSize);
};
