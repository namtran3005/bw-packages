import { getOrderTier } from '../getOrderTier';
import { CurrencyPair, TradingFeeTierDoc } from "../../types";

const mockUserId = 'userId';
const mockAmount = 1000;

const mockOrderTier3BTC: TradingFeeTierDoc = {
  _id: '62f113ab970013251a6c4a3f',
  tierId: 'T3_BTC',
  createdAt: new Date(),
  savingsPlanTcFeeOption: 'BTCEUR_TIER3_SAVINGS_PLAN',
  standardTcFeeOption: 'BTCEUR_TIER3_NORMAL',
  volumeLowerBound: 899.99,
  volumeUpperBound: 1499.99
}

const mockOrderTier3ETH: TradingFeeTierDoc = {
  _id: '62f113ab970013251a6c4a40',
  tierId: 'T3_ETH',
  createdAt: new Date(),
  savingsPlanTcFeeOption: 'ETHEUR_TIER3_SAVINGS_PLAN',
  standardTcFeeOption: 'ETHEUR_TIER3_NORMAL',
  volumeLowerBound: 899.99,
  volumeUpperBound: 1499.99
}

const mockOrderTier4BTC: TradingFeeTierDoc = {
  _id: '62f113ab970013251a6c4a3f',
  tierId: 'T4_BTC',
  createdAt: new Date(),
  savingsPlanTcFeeOption: 'BTCEUR_TIER4_SAVINGS_PLAN',
  standardTcFeeOption: 'BTCEUR_TIER4_NORMAL',
  volumeLowerBound: 1499.99,
  volumeUpperBound: 5999.99
}

const mockOrderTier4ETH: TradingFeeTierDoc = {
  _id: '62f113ab970013251a6c4a40',
  tierId: 'T4_ETH',
  createdAt: new Date(),
  savingsPlanTcFeeOption: 'ETHEUR_TIER4_SAVINGS_PLAN',
  standardTcFeeOption: 'ETHEUR_TIER4_NORMAL',
  volumeLowerBound: 1499.99,
  volumeUpperBound: 5999.99
}

const mockFeeTiers = [mockOrderTier3BTC, mockOrderTier3ETH];
const mockFeeTierForVolume = [mockOrderTier4BTC, mockOrderTier4ETH];
const mockGetUser = jest.fn().mockResolvedValue({});
const mockGetFeeTiers = jest.fn().mockResolvedValue(mockFeeTiers);
const mockGetFeeTiersForVolume = jest.fn().mockResolvedValue(mockFeeTierForVolume);

jest.mock('../common', () => ({
  ...(jest.requireActual('../common') as Record<string, unknown>),
  getUser: () => mockGetUser(),
  getFeeTiers: () => mockGetFeeTiers(),
  getFeeTiersForVolume: () => mockGetFeeTiersForVolume(),
}));

describe('Get order fee tier', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should return fee tier for order amount + user rolling trading volume', async () => {
    const result = await getOrderTier(mockAmount, CurrencyPair.BTCEUR, mockUserId);

    expect(result).toBe(mockOrderTier3BTC);
  });

  it('should throw if user query fails', async () => {
    const mockError = new Error('User was not found');
    mockGetUser.mockRejectedValueOnce(mockError);

    await expect(
      getOrderTier.bind(this, mockAmount, CurrencyPair.BTCEUR, mockUserId)
    ).rejects.toThrow(mockError);
  });

  it('should throw if get fee tier fails', async () => {
    const mockError = new Error('Fee tier was not found');

    mockGetFeeTiers.mockRejectedValueOnce(mockError);

    await expect(
      getOrderTier.bind(this, mockAmount, CurrencyPair.BTCEUR, mockUserId)
    ).rejects.toThrow(mockError);
  });

  it('should return fee tier for order amount', async () => {
    const result = await getOrderTier(mockAmount, CurrencyPair.BTCEUR);

    expect(result).toBe(mockOrderTier4BTC);
  });

  it('should throw if get fee tier for volume fails', async () => {
    const mockError = new Error('Fee tier was not found');

    mockGetFeeTiersForVolume.mockRejectedValueOnce(mockError);

    await expect(
      getOrderTier.bind(this, mockAmount)
    ).rejects.toThrow(mockError);
  });
});
