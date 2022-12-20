import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { CryptoHistoricalPricesModel } from '../../../model';
import { presets, PresetName, timezone } from '../presets';
import { aggregate } from '../index';

describe('cryptoHistoricalPricesRepo.aggregate', () => {
  beforeAll(() => {
    jest
      .spyOn(CryptoHistoricalPricesModel, 'aggregate')
      .mockImplementation(() => Promise.resolve([]));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should group by day in the local TZ if sampling is daily', async () => {
    for (const p of [PresetName.MONTH, PresetName.YEAR]) {
      jest.clearAllMocks();
      await aggregate(Currencies.BTC, p);

      expect(
        (CryptoHistoricalPricesModel.aggregate as jest.Mock).mock.calls[0][0]
      ).toMatchObject({
        // Index 4 is the group stage
        4: {
          $group: {
            _id: {
              $dateToString: {
                date: '$t',
                timezone,
                format: '%Y%m%d',
              },
            },
            p: {
              $last: '$p',
            },
            t: {
              $last: '$t',
            },
          },
        },
      });
    }
  });

  it('should group by by just time intervals if sampling is more granular than daily', async () => {
    for (const p of [PresetName.DAY, PresetName.WEEK]) {
      jest.clearAllMocks();
      await aggregate(Currencies.BTC, p);

      expect(
        (CryptoHistoricalPricesModel.aggregate as jest.Mock).mock.calls[0][0]
      ).toMatchObject({
        // Index 4 is the group stage
        4: {
          $group: {
            _id: {
              $subtract: [
                {
                  $toLong: '$t',
                },
                {
                  $mod: [
                    {
                      $toLong: '$t',
                    },
                    presets[p]().interval,
                  ],
                },
              ],
            },
            p: {
              $last: '$p',
            },
            t: {
              $last: '$t',
            },
          },
        },
      });
    }
  });
});
