import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { CryptoHistoricalPricesModel } from '../../model';
import { presets, PresetName, intervals, timezone } from './presets';

export { PresetName } from './presets';

export const aggregate = async (
  currency: Currencies.BTC | Currencies.ETH,
  presetName: PresetName
): Promise<Array<{ t: number; p: number }>> => {
  const preset = presets[presetName]();

  const groupId =
    preset.interval === intervals.d1
      ? {
          /**
           * If sampling is daily or more, the timezone matters, because the data point should be the EoD price.
           * So the _id is composed of year, month and day as per Europe/Berlin TZ.
           */
          $dateToString: {
            date: '$t',
            timezone,
            format: '%Y%m%d',
          },
        }
      : /**
         * If sampling is more granular than daily, then there's no bond to EoD and the timezone doesn't matter.
         * So expensive date processing operations are not required.
         */
        {
          $subtract: [
            {
              $toLong: '$t',
            },
            {
              $mod: [
                {
                  $toLong: '$t',
                },
                preset.interval,
              ],
            },
          ],
        };

  const res = await CryptoHistoricalPricesModel.aggregate([
    {
      $match: {
        currency,
        ...preset.match,
      },
    },
    {
      $unwind: '$data',
    },
    {
      $project: {
        t: '$data.t',
        p: '$data.p',
      },
    },
    {
      $match: preset.filter,
    },
    {
      $group: {
        _id: groupId,
        p: {
          [preset.sampling]: '$p',
        },
        t: {
          [preset.sampling]: '$t',
        },
      },
    },
    {
      $project: {
        _id: 0,
        t: {
          $toLong: '$t',
        },
        p: '$p',
      },
    },
    {
      $sort: {
        t: 1,
      },
    },
  ]);
  return res;
};
