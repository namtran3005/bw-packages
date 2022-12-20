import {
  tradingFeeTiersRepo,
  usersRepo,
} from '@bitwala-cryptobank-squad/package-repositories-main';

import { getCurrencyTier, getFeeTiers, getFeeTiersForVolume, getUser } from '../common';
import { Currency, TradingFeeTierDoc } from "../../types";

const releaseMonetizationStatus = { isEnabled: true, releaseDate: new Date('2022-09-01T00:00:00.000Z') }
const unreleasedMonetizationStatus = { isEnabled: false, releaseDate: undefined }
const mockGetMonetizationStatus = jest.fn();

jest.mock('../../common/getMonetizationStatus', () => ({
  getMonetizationStatus: () => mockGetMonetizationStatus(),
}))

describe('Fee tier common functions - getUser', () => {
  const mockUserId = 'userId';
  const mockUser = { _id: mockUserId };
  const mockGetUserById = jest.fn();

  beforeEach(() => {
    jest.spyOn(usersRepo, 'getUserById').mockImplementation(mockGetUserById);
  });

  it('should return user doc', async () => {
    mockGetUserById.mockResolvedValueOnce(mockUser);

    const result = await getUser(mockUserId);

    expect(mockGetUserById).toHaveBeenCalledWith(mockUserId);
    expect(result).toStrictEqual(mockUser);
  });

  it('should throw if user is not found', async () => {
    mockGetUserById.mockResolvedValueOnce(null);

    await expect(getUser.bind(this, mockUserId)).rejects.toThrow(
      'User could not be found with id userId'
    );
  });
});

const mockFeeTierBTC: TradingFeeTierDoc = {
  _id: '62f113ab970013251a6c4a3f',
  tierId: 'T1_BTC',
  createdAt: new Date(),
  standardTcFeeOption: 'BTCEUR_TIER1_SAVINGS_PLAN',
  savingsPlanTcFeeOption: 'BTCEUR_TIER1_NORMAL',
  volumeLowerBound: 0,
  volumeUpperBound: 299.99,
}

const mockOrderTierETH: TradingFeeTierDoc = {
  _id: '62f113ab970013251a6c4a4f',
  tierId: 'T1_ETH',
  createdAt: new Date(),
  standardTcFeeOption: 'ETHEUR_TIER1_SAVINGS_PLAN',
  savingsPlanTcFeeOption: 'ETHEUR_TIER1_NORMAL',
  volumeLowerBound: 0,
  volumeUpperBound: 299.99,
}

const mockOldFeeTierBTC = {
  _id: '62f113ab970013251a6c5a3f',
  tierId: 'TOld_BTC',
  createdAt: new Date(),
  standardTcFeeOption: 'BTCEUR_DEFAULT',
  savingsPlanTcFeeOption: 'BTCEUR_DEFAULT',
  volumeLowerBound: 0,
  volumeUpperBound: 1000000000,
}

const mockOldFeeTierETH = {
  _id: '62f113ab970013251a6c5a3f',
  tierId: 'TOld_ETH',
  createdAt: new Date(),
  standardTcFeeOption: 'ETHEUR_DEFAULT',
  savingsPlanTcFeeOption: 'ETHEUR_DEFAULT',
  volumeLowerBound: 0,
  volumeUpperBound: 1000000000,
}

const mockVolume = 1000;
const mockTieredFees = [mockFeeTierBTC, mockOrderTierETH];
const mockOldFeeTiers = [mockOldFeeTierBTC, mockOldFeeTierETH];
const mockFeeTiers = [...mockTieredFees, ...mockOldFeeTiers];
const mockGetByVolume = jest.fn();

describe('Fee tier common functions - getFeeTier', () => {
  const mockUserWithUpdatedTerms = {
    bitwalaTermsAndConditionsSignedAt: '2022-09-02T00:00:00.000Z',
  } as never;
  const mockUserWithOldTerms = {
    bitwalaTermsAndConditionsSignedAt: '2022-08-02T00:00:00.000Z',
  } as never;

  beforeEach(() => {
    jest
      .spyOn(tradingFeeTiersRepo, 'getByVolume')
      .mockImplementation(mockGetByVolume);
  });

  it('should return fee tier', async () => {
    mockGetMonetizationStatus.mockResolvedValue(releaseMonetizationStatus);
    mockGetByVolume.mockResolvedValueOnce(mockFeeTiers);

    const result = await getFeeTiers(mockUserWithUpdatedTerms, mockVolume);

    expect(mockGetByVolume).toHaveBeenCalledWith(mockVolume);
    expect(result).toStrictEqual(mockTieredFees);
  });

  it('should return old fee tier', async () => {
    mockGetMonetizationStatus.mockResolvedValue(unreleasedMonetizationStatus);
    mockGetByVolume.mockResolvedValueOnce(mockFeeTiers);

    const result = await getFeeTiers(mockUserWithOldTerms, mockVolume);

    expect(mockGetByVolume).toHaveBeenCalledWith(mockVolume);
    expect(result).toStrictEqual(mockOldFeeTiers);
  });

  it('should throw if no fee tiers is found', async () => {
    mockGetByVolume.mockResolvedValueOnce([]);

    await expect(
      getFeeTiers.bind(this, mockUserWithUpdatedTerms, mockVolume)
    ).rejects.toThrow('Trading fee tiers not found');
  });

  it('should throw if old tier is not found', async () => {
    mockGetByVolume.mockResolvedValueOnce(mockTieredFees);

    await expect(
      getFeeTiers.bind(this, mockUserWithOldTerms, mockVolume)
    ).rejects.toThrow('Old fee tiers not found');
  });

  it('should throw if fee tiers is not found', async () => {
    mockGetByVolume.mockResolvedValueOnce(mockOldFeeTiers);

    await expect(
      getFeeTiers.bind(this, mockUserWithUpdatedTerms, mockVolume)
    ).rejects.toThrow('Trading fee tiers not found');
  });


});

describe('Fee tier common functions - getFeeTierForVolume', () => {
  beforeEach(() => {
    jest
      .spyOn(tradingFeeTiersRepo, 'getByVolume')
      .mockImplementation(mockGetByVolume);
  });

  it('should return fee tier', async () => {
    mockGetByVolume.mockResolvedValueOnce(mockFeeTiers);

    const result = await getFeeTiersForVolume(mockVolume);

    expect(mockGetByVolume).toHaveBeenCalledWith(mockVolume);
    expect(result).toStrictEqual(mockTieredFees);
  });

  it('should throw if fee tier is not found', async () => {
    mockGetByVolume.mockResolvedValueOnce(mockOldFeeTiers);

    await expect(
      getFeeTiersForVolume.bind(this, mockVolume)
    ).rejects.toThrow('Trading fee tiers not found');
  });
});

describe('Fee tier common functions - getCurrencyTier', () => {
  it('should return BTC fee tier', async () => {
    const result = await getCurrencyTier(mockTieredFees, Currency.BTC);

    expect(result).toStrictEqual(mockFeeTierBTC);
  });

  it('should return ETH fee tier', async () => {
    const result = await getCurrencyTier(mockOldFeeTiers, Currency.ETH);

    expect(result).toStrictEqual(mockOldFeeTierETH);
  });

  it('should throw if fee tier for currency is not found', async () => {
    await expect(
      getCurrencyTier.bind(this, [mockOldFeeTierETH, mockOrderTierETH], Currency.BTC)
    ).toThrow('Trading fee tier for currency not found');
  });
});
