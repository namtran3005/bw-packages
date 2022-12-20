import {
  tradingFeeTiersRepo,
  usersRepo,
} from '@bitwala-cryptobank-squad/package-repositories-main';

import { getMonetizationStatus } from "../common/getMonetizationStatus";
import { OLD_TRADING_FEE_TIER_ID } from '../constants';
import { Currency, CurrencyPair, TradingFeeTierDoc, UserDoc } from "../types";

export const getUser = async (id: string): Promise<UserDoc> => {
  const userDoc = await usersRepo.getUserById(id);
  if (!userDoc) {
    throw new Error(`User could not be found with id ${id}`);
  }

  return userDoc;
};

export const getFeeTiers = async (
  user: UserDoc,
  volume: number
): Promise<TradingFeeTierDoc[]> => {
  const allFeeTiers = await getFeeTiersByVolume(volume);
  const oldFeeTiers = getOldFeeTiers(allFeeTiers);
  const feeTiers = getTieredFees(allFeeTiers);

  if (await shouldApplyTieredFees(user)) {
    return feeTiers;
  }

  return oldFeeTiers;
};

export const getFeeTiersForVolume = async (
  volume: number
): Promise<TradingFeeTierDoc[]> => {
  const allFeeTiers = await getFeeTiersByVolume(volume);
  const feeTiers = getTieredFees(allFeeTiers);

  return feeTiers;
};

const getOldFeeTiers = (feeTiers: TradingFeeTierDoc[]) => {
  const oldFeeTier = feeTiers.filter(
    ({ tierId }) => tierId.startsWith(OLD_TRADING_FEE_TIER_ID)
  );

  if (oldFeeTier.length === 0) {
    throw new Error('Old fee tiers not found');
  }

  return oldFeeTier
}

const getTieredFees = (feeTiers: TradingFeeTierDoc[]) => {
  const feeTier = feeTiers.filter(
    ({ tierId }) => !tierId.startsWith(OLD_TRADING_FEE_TIER_ID)
  );

  if (feeTier.length === 0) {
    throw new Error(`Trading fee tiers not found`);
  }

  return feeTier;
}

const getFeeTiersByVolume = async (volume: number) => {
  const feeTiers = await tradingFeeTiersRepo.getByVolume(volume);
  if (!feeTiers || feeTiers.length === 0) {
    throw new Error(`Trading fee tiers not found`);
  }

  return feeTiers;
};

const shouldApplyTieredFees = async (user: UserDoc) => {
  const termsSignedAt = user.bitwalaTermsAndConditionsSignedAt;
  if (!termsSignedAt) {
    throw new Error(`User (${user._id}) hasn't signed terms and conditions`);
  }

  const monetizationStatus = await getMonetizationStatus();
  if (!monetizationStatus.isEnabled) {
    return false;
  }

  const termsSignedAtDate = new Date(termsSignedAt).valueOf();
  const cutOffDate = monetizationStatus.releaseDate.valueOf();
  const userHasSignedAfterCutOffDate = termsSignedAtDate >= cutOffDate;

  return userHasSignedAfterCutOffDate;
};

export const cryptoCurrencyFromPair: Record<CurrencyPair, Currency> = {
  [CurrencyPair.BTCEUR]: Currency.BTC,
  [CurrencyPair.ETHEUR]: Currency.ETH,
}

export const getCurrencyTier = (feeTiers: TradingFeeTierDoc[], currency: Currency): TradingFeeTierDoc => {
  const feeTier = feeTiers.find(
    ({ tierId }) => tierId.endsWith(currency)
  );

  if (!feeTier) {
    throw new Error(`Trading fee tier for currency not found`);
  }

  return feeTier;
}
