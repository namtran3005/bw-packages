import { getUserTiers } from '../getUserTiers';
import { TradingFeeTierDoc } from "../../types";

const mockUserId = 'userId';

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

const mockFeeTiers = [mockOrderTier3BTC, mockOrderTier3ETH]
const mockGetUser = jest.fn().mockResolvedValue({});
const mockGetFeeTiers = jest.fn().mockResolvedValue(mockFeeTiers);

jest.mock('../common', () => ({
  getUser: () => mockGetUser(),
  getFeeTiers: () => mockGetFeeTiers(),
}));

describe('Get user fee tier', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should return fee tier', async () => {
    const result = await getUserTiers(mockUserId);

    expect(result).toBe(mockFeeTiers);
  });

  it('should throw if user query fails', async () => {
    const mockError = new Error('User was not found');
    mockGetUser.mockRejectedValueOnce(mockError);

    await expect(getUserTiers.bind(this, mockUserId)).rejects.toThrow(mockError);
  });

  it('should throw if get fee tier fails', async () => {
    const mockError = new Error('Fee tier was not found');
    mockGetFeeTiers.mockRejectedValueOnce(mockError);

    await expect(getUserTiers.bind(this, mockUserId)).rejects.toThrow(mockError);
  });
});
