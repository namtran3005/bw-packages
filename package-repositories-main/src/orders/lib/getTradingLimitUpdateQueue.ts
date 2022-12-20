import { OrderStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { OrderModel } from '../model';

export const TRADING_LIMIT_PERIOD_HOURS = 168;

type RefreshQueue = Array<{
  tradedEUR: number;
  limitRefreshDate: Date;
  orderId: string;
  quotedAt: Date;
}>;

export const getTradingLimitUpdateQueue = (
  userIds: string[],
  fromDate: Date,
  toDate: Date
): Promise<Record<string, RefreshQueue>[]> => {
  return OrderModel.aggregate([
    {
      $match: {
        owner: {
          $in: userIds,
        },
        quotedAt: {
          $gte: fromDate,
          $lt: toDate,
        },
        status: {
          $in: [
            OrderStatus.SETTLED,
            OrderStatus.CLEARED,
            OrderStatus.PAID,
            OrderStatus.PAYMENT_CONFIRMED,
            OrderStatus.PAYMENT_DETECTED,
            OrderStatus.PAYMENT_INVALID,
          ],
        },
      },
    },
    {
      $project: {
        tradedEUR: {
          $cond: [
            {
              $eq: ['$input.currency', 'EUR'],
            },
            {
              // subtract fees from trade amount
              $subtract: [
                {
                  $toDouble: '$input.amount',
                },
                {
                  // add up all fees in EUR
                  $reduce: {
                    input: '$fees',
                    initialValue: 0,
                    in: {
                      $add: [
                        {
                          // $$this refers to current object in $fees array
                          $toDouble: '$$this.amount',
                        },
                        '$$value',
                      ],
                    },
                  },
                },
              ],
            },
            { $toDouble: '$output.amount' },
          ],
        },
        limitRefreshDate: {
          $add: [
            // 608400000 ms,
            (TRADING_LIMIT_PERIOD_HOURS + 1) * 3.6e6,
            {
              $dateFromParts: {
                year: {
                  $year: '$quotedAt',
                },
                month: {
                  $month: '$quotedAt',
                },
                day: {
                  $dayOfMonth: '$quotedAt',
                },
                hour: {
                  $hour: '$quotedAt',
                },
              },
            },
          ],
        },
        userId: '$owner',
        orderId: '$_id',
        quotedAt: 1,
        _id: 0,
      },
    },
    {
      // group by user
      $group: {
        _id: '$userId',
        refreshQueue: {
          $push: {
            tradedEUR: '$tradedEUR',
            limitRefreshDate: '$limitRefreshDate',
            orderId: '$orderId',
            quotedAt: '$quotedAt',
          },
        },
      },
    },
    {
      $group: {
        _id: null,
        refreshQueue: {
          $push: {
            k: {
              $toString: '$_id',
            },
            v: '$refreshQueue',
          },
        },
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $arrayToObject: '$refreshQueue',
        },
      },
    },
  ]).exec();
};
