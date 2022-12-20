import { cachedQuotesRepo } from '@bitwala-cryptobank-squad/package-repositories-main';

import { FeeConfigRecord } from '../../integrations/trading-core/types';
import { Currency, CurrencyPair, FeeOptionKey, OrderEntryInput, TradingFeeTierDoc } from '../../types';
import { getOrderFeeOptionName as handler } from '../getOrderFeeOptionName';

const mockGetFeeConfigs = jest.fn()
const mockGetOrderTier = jest.fn()
const mockGetRecentCachedQuote = jest.fn()

jest.mock('../getOrderTier', () => ({
  getOrderTier: (amount: number, pair: string, userId?: string) => mockGetOrderTier(amount, pair, userId),
}))

const mockTradingFeesClient = {
  getFeeConfigs: mockGetFeeConfigs,
}

const getOrderFeeOptionName = handler(
  mockTradingFeesClient as never,
)

const mockBuyOrderInput: OrderEntryInput = {
  currency: Currency.EUR,
  amount: 1000
}

const mockSellOrderInput: OrderEntryInput = {
  currency: Currency.BTC,
  amount: 0.050 // converted to $1000 at 20000/1 rate
}

const mockPair = CurrencyPair.BTCEUR

const mockUser = {
  _id: 'userId',
  rollingTradingVolume: 500
}

const mockOrderTier3: TradingFeeTierDoc = {
  _id: '62f113ab970013251a6c4a3f',
  tierId: 'T3_BTC',
  createdAt: new Date(),
  savingsPlanTcFeeOption: 'BTCEUR_TIER3_SAVINGS_PLAN',
  standardTcFeeOption: 'BTCEUR_TIER3_NORMAL',
  volumeLowerBound: 899.99,
  volumeUpperBound: 1499.99
}

const mockOrderTier4: TradingFeeTierDoc = {
  _id: '62f113ab970013251a6c4a40',
  tierId: 'T4_BTC',
  createdAt: new Date(),
  savingsPlanTcFeeOption: 'BTCEUR_TIER4_SAVINGS_PLAN',
  standardTcFeeOption: 'BTCEUR_TIER4_NORMAL',
  volumeLowerBound: 1499.99,
  volumeUpperBound: 5999.99
}

const mockNormalFeeConfig3: FeeConfigRecord = {
  id: "bcaf5faa-c07d-47be-9690-80c4d8ec08c8",
  pair: CurrencyPair.BTCEUR,
  feeOptionName: "BTCEUR_TIER3_NORMAL",
  bitwalaFee: 0.02,
  networkFee: 1,
  minimumBitwalaFee: 2,
  minimumBitwalaFeeApplies: true,
  active: true,
  setAt: new Date(),
  updatedAt: new Date(),
}

const mockNormalFeeConfig4: FeeConfigRecord = {
  id: "14050f7f-2119-44ff-af23-ed73e64ce88d",
  pair: CurrencyPair.BTCEUR,
  feeOptionName: "BTCEUR_TIER4_NORMAL",
  bitwalaFee: 0.0175,
  networkFee: 1,
  minimumBitwalaFee: 2,
  minimumBitwalaFeeApplies: true,
  active: true,
  setAt: new Date(),
  updatedAt: new Date(),
}

const mockSavingsPlanFeeConfig3: FeeConfigRecord = {
  id: "6bc9407e-28a5-4937-b6f8-c12d3c214d65",
  pair: CurrencyPair.BTCEUR,
  feeOptionName: "BTCEUR_TIER3_SAVINGS_PLAN",
  bitwalaFee: 0.02,
  networkFee: 1,
  minimumBitwalaFee: 2,
  minimumBitwalaFeeApplies: false,
  active: true,
  setAt: new Date(),
  updatedAt: new Date(),
}

const mockSavingsPlanFeeConfig4: FeeConfigRecord = {
  id: "f5da37ce-3320-42ef-8719-db3182b69c98",
  pair: CurrencyPair.BTCEUR,
  feeOptionName: "BTCEUR_TIER4_SAVINGS_PLAN",
  bitwalaFee: 0.0175,
  networkFee: 1,
  minimumBitwalaFee: 2,
  minimumBitwalaFeeApplies: false,
  active: true,
  setAt: new Date(),
  updatedAt: new Date(),
}

const mockedFeeConfigs: FeeConfigRecord[] = [
  mockNormalFeeConfig3,
  mockNormalFeeConfig4,
  mockSavingsPlanFeeConfig3,
  mockSavingsPlanFeeConfig4,
]

const mockRecentCacheQuote = {
  _id: '60cde9f6f1018c01a0bad1d2',
  pair: CurrencyPair.BTCEUR,
  ask: 21000,
  bid: 20000,
}

describe('Get order fee option name', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(cachedQuotesRepo, 'getRecentCachedQuote')
      .mockImplementation(mockGetRecentCachedQuote)
  });

  it('should return standard fee option name for buy order', async () => {
    mockGetOrderTier.mockResolvedValueOnce(mockOrderTier3)

    const result = await getOrderFeeOptionName(mockBuyOrderInput, mockPair, FeeOptionKey.standardFee, mockUser as never)

    expect(mockGetOrderTier).toHaveBeenCalledWith(mockBuyOrderInput.amount, CurrencyPair.BTCEUR, mockUser._id)
    expect(result).toStrictEqual('BTCEUR_TIER3_NORMAL')
  });

  it('should return savings plan fee option name for buy order', async () => {
    mockGetOrderTier.mockResolvedValueOnce(mockOrderTier3)

    const result = await getOrderFeeOptionName(mockBuyOrderInput, mockPair, FeeOptionKey.savingsPlanFee, mockUser as never)

    expect(mockGetOrderTier).toHaveBeenCalledWith(mockBuyOrderInput.amount, CurrencyPair.BTCEUR, mockUser._id)
    expect(result).toStrictEqual('BTCEUR_TIER3_SAVINGS_PLAN')
  });

  it('should return standard fee option name for sell order after calculating fees', async () => {
    mockGetOrderTier.mockResolvedValueOnce(mockOrderTier4)
    mockGetOrderTier.mockResolvedValueOnce(mockOrderTier3)
    mockGetRecentCachedQuote.mockResolvedValueOnce(mockRecentCacheQuote)
    mockGetFeeConfigs.mockResolvedValueOnce(mockedFeeConfigs)

    const result = await getOrderFeeOptionName(mockSellOrderInput, mockPair, FeeOptionKey.standardFee, mockUser as never)
    const calculatedOutputAmount = 1000 - (1000 * mockNormalFeeConfig4.bitwalaFee)

    expect(mockGetOrderTier).toHaveBeenNthCalledWith(1, 1000, CurrencyPair.BTCEUR, mockUser._id)
    expect(mockGetOrderTier).toHaveBeenNthCalledWith(2, calculatedOutputAmount, CurrencyPair.BTCEUR, mockUser._id)
    expect(result).toStrictEqual('BTCEUR_TIER3_NORMAL')
  });

  it('should return standard fee option name for sell order without user', async () => {
    mockGetOrderTier.mockResolvedValueOnce(mockOrderTier3)
    mockGetRecentCachedQuote.mockResolvedValueOnce(mockRecentCacheQuote)
    mockGetFeeConfigs.mockResolvedValueOnce(mockedFeeConfigs)

    const result = await getOrderFeeOptionName(mockSellOrderInput, mockPair, FeeOptionKey.standardFee)

    expect(mockGetOrderTier).toHaveBeenCalledWith(1000, CurrencyPair.BTCEUR, undefined)
    expect(result).toStrictEqual('BTCEUR_TIER3_NORMAL')
  });

  it('should return savings plan fee option name for sell order after calculating fees', async () => {
    mockGetOrderTier.mockResolvedValueOnce(mockOrderTier4)
    mockGetOrderTier.mockResolvedValueOnce(mockOrderTier3)
    mockGetRecentCachedQuote.mockResolvedValueOnce(mockRecentCacheQuote)
    mockGetFeeConfigs.mockResolvedValueOnce(mockedFeeConfigs)

    const result = await getOrderFeeOptionName(mockSellOrderInput, mockPair, FeeOptionKey.savingsPlanFee, mockUser as never)
    const calculatedOutputAmount = 1000 - (1000 * mockNormalFeeConfig4.bitwalaFee)

    expect(mockGetOrderTier).toHaveBeenNthCalledWith(1, 1000, CurrencyPair.BTCEUR, mockUser._id)
    expect(mockGetOrderTier).toHaveBeenNthCalledWith(2, calculatedOutputAmount, CurrencyPair.BTCEUR, mockUser._id)
    expect(result).toStrictEqual('BTCEUR_TIER3_SAVINGS_PLAN')
  });

  it('should return savings plan fee option name for sell order without user', async () => {
    mockGetOrderTier.mockResolvedValueOnce(mockOrderTier3)
    mockGetRecentCachedQuote.mockResolvedValueOnce(mockRecentCacheQuote)
    mockGetFeeConfigs.mockResolvedValueOnce(mockedFeeConfigs)

    const result = await getOrderFeeOptionName(mockSellOrderInput, mockPair, FeeOptionKey.savingsPlanFee)

    expect(mockGetOrderTier).toHaveBeenCalledWith(1000, CurrencyPair.BTCEUR, undefined)
    expect(result).toStrictEqual('BTCEUR_TIER3_SAVINGS_PLAN')
  });
});
