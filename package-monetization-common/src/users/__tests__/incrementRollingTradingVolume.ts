import { incrementRollingTradingVolume } from "../incrementRollingTradingVolume";

const mockUpdateRollingTradingVolume = jest.fn();

const mockInsertTradingVolumeHistoryRecord = jest.fn();

jest.mock('@bitwala-cryptobank-squad/package-repositories-main', () => ({
  ...(jest.requireActual(
    '@bitwala-cryptobank-squad/package-repositories-main'
  ) as Record<string, unknown>),

  usersRepo: {
    updateRollingTradingVolume: (...args: never[]) =>
      mockUpdateRollingTradingVolume(...args),
  },
}));

jest.mock('../insertTradingVolumeHistoryRecord', () => ({
  insertTradingVolumeHistoryRecord:  (...args: never[]) => mockInsertTradingVolumeHistoryRecord(...args),
}));

const mockDate = new Date();

describe('incrementRollingTradingVolume', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);
  })

  afterEach(jest.clearAllMocks);

  afterAll(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should increment rolling trading volume and insert trading volume history for buy order', async () => {
    await incrementRollingTradingVolume(
      {
        _id: 'testOrderId',
        input: {
          currency: 'EUR',
          amount: 1000,
        },
      } as never,
      {
        _id: 'testUserId',
      } as never
    );

    expect(mockUpdateRollingTradingVolume).toHaveBeenCalledWith(
      'testUserId',
      1000
    );
  });

  it('should increment rolling trading volume and insert trading volume history for sell order', async () => {
    await incrementRollingTradingVolume(
      {
        _id: 'testOrderId',
        input: {
          currency: 'BTC',
          amount: 1,
        },
        output: {
          currency: 'EUR',
          amount: 1000,
        },
      } as never,
      {
        _id: 'testUserId',
      } as never
    );

    expect(mockUpdateRollingTradingVolume).toHaveBeenCalledWith(
      'testUserId',
      1000
    );
  });
});