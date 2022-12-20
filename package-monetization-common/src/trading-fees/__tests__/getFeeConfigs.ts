import { getTradingCoreFeeConfigs as handler } from '../getFeeConfigs';

const mockGet = jest.fn()
const mockSet = jest.fn()
const mockGetFeeConfigs = jest.fn()

const redis = {
  get: mockGet,
  set: mockSet
}

const tradingCoreClient = {
  feeConfigs: {
    getFeeConfigs: mockGetFeeConfigs
  }
}

const getTradingCoreFeeConfigs = handler(
  redis as never,
  tradingCoreClient as never
);

const mockedCacheFeeConfigs = [{
  id: 'cached-123',
  pair: "BTCEUR",
  feeOptionName: "BTCEUR_TIER1_NORMAL",
  bitwalaFee: 0.025,
  networkFee: 1,
  minimumBitwalaFee: 2,
  minimumBitwalaFeeApplies: true,
  active: false,
  setAt: "2022-08-08T10:18:55.688Z",
  updatedAt: "2022-08-08T10:18:55.688Z",
}]

const mockedFeeConfigs = [{
  id: 'tc-123',
  pair: "BTCEUR",
  feeOptionName: "BTCEUR_TIER1_NORMAL",
  bitwalaFee: 0.025,
  networkFee: 1,
  minimumBitwalaFee: 2,
  minimumBitwalaFeeApplies: true,
  active: false,
  setAt: "2022-08-08T10:18:55.688Z",
  updatedAt: "2022-08-08T10:18:55.688Z",
}]

describe('Get fee configs', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should return cached fee configs', async () => {
    mockGet.mockResolvedValueOnce(JSON.stringify(mockedCacheFeeConfigs))
    const result = await getTradingCoreFeeConfigs();

    expect(result).toStrictEqual(mockedCacheFeeConfigs);
  });

  it('should return fee configs from TC', async () => {
    mockGet.mockResolvedValueOnce(null);
    mockGetFeeConfigs.mockResolvedValueOnce(mockedFeeConfigs)
    const result = await getTradingCoreFeeConfigs();

    expect(result).toStrictEqual(mockedFeeConfigs);
  });

  it('should cache fee configs from TC', async () => {
    mockGet.mockResolvedValueOnce(null);
    mockGetFeeConfigs.mockResolvedValueOnce(mockedFeeConfigs)
    await getTradingCoreFeeConfigs();

    expect(mockSet).toHaveBeenCalledWith(
      'trading-fee-configs',
      JSON.stringify(mockedFeeConfigs),
      'ex',
      24 * 60 * 60
    );
  });

  it('should fetch fee configs from TC if cache contains validation error', async () => {
    mockGet.mockResolvedValueOnce(JSON.stringify([{  id: 'has-validation-error' }]));
    mockGetFeeConfigs.mockResolvedValueOnce(mockedFeeConfigs)
    const result = await getTradingCoreFeeConfigs();

    expect(result).toStrictEqual(mockedFeeConfigs);
  });
});
