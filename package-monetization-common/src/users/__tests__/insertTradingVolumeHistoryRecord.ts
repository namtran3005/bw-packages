import { TradingVolumeHistoryType } from "@bitwala-cryptobank-squad/package-schemas";

import { insertTradingVolumeHistoryRecord } from "../insertTradingVolumeHistoryRecord";

const mockInsert = jest.fn();

jest.mock('@bitwala-cryptobank-squad/package-repositories-main', () => ({
  ...(jest.requireActual(
    '@bitwala-cryptobank-squad/package-repositories-main'
  ) as Record<string, unknown>),

  tradingVolumeHistoryRepo: {
    insert: (...args: never[]) => mockInsert(...args),
  },
}));

const mockDate = new Date();

describe('insertTradingVolumeHistoryRecord', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
  })

  afterEach(jest.clearAllMocks);

  afterAll(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should insert trading volume history', async () => {
    await insertTradingVolumeHistoryRecord(
      {
        _id: 'testOrderId',
        input: {
          currency: 'EUR',
          amount: 50,
        },
      } as never,
      {
        _id: 'testUserId',
        rollingTradingVolume: 50,
      } as never
    );

    expect(mockInsert).toHaveBeenCalledWith({
      previousTradingVol: 50,
      newTradingVol: 100,
      orders: ['testOrderId'],
      owner: 'testUserId',
      type: TradingVolumeHistoryType.INCREASE,
      insertedAt: mockDate,
    });
  });
});