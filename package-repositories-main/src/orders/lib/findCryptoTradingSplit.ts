import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { OrderStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { OrderModel } from '../model';

export type TradingData = {
  _id: string;
  total: number;
};

export enum TradingType {
  'BUY' = 'Buy',
  'SELL' = 'Sell',
}

export const findCryptoTradingSplit = (
  crypto: string,
  date: Date
): Promise<TradingData[]> => {
  return OrderModel.aggregate([
    {
      $match: {
        // fetch data based on the crypto type (BTC, ETH)
        $or: [
          {
            'input.currency': crypto,
          },
          {
            'output.currency': crypto,
          },
        ],
        // fetch orders whose status is not listed below
        status: {
          $nin: [
            OrderStatus.RESERVATION_EXPIRED,
            OrderStatus.QUOTED,
            OrderStatus.RESERVATION_RELEASED,
            OrderStatus.RESERVED,
          ],
        },
        // fetch based on date. This allows to fetch week, monthly and yearly stats
        createdAt: {
          $gte: new Date(date),
        },
      },
    },
    {
      $group: {
        _id: {
          // switch statement to group based on BUY or SELL based on the currency
          $switch: {
            branches: [
              {
                case: {
                  $eq: ['$input.currency', Currencies.EUR],
                },
                then: TradingType.BUY,
              },
              {
                case: {
                  $eq: ['$output.currency', Currencies.EUR],
                },
                then: TradingType.SELL,
              },
            ],
          },
        },
        // switch statement to find the total based on the condition
        total: {
          $sum: {
            $switch: {
              branches: [
                {
                  case: {
                    $eq: ['$input.currency', Currencies.EUR],
                  },
                  then: {
                    $convert: {
                      input: '$input.amount',
                      to: 'double',
                    },
                  },
                },
                {
                  case: {
                    $eq: ['$output.currency', Currencies.EUR],
                  },
                  then: {
                    $convert: {
                      input: '$output.amount',
                      to: 'double',
                    },
                  },
                },
              ],
              // if the switch condition does not match, we make the default value 0
              default: 0,
            },
          },
        },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]).exec();
};
