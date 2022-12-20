import Big from "big.js";

import { ORDER_AMOUNT_PRECISION } from "../constants";
import { CurrencyPair, TradingFeeTierDoc } from '../types';
import { getFeeTiers, getFeeTiersForVolume, getUser, cryptoCurrencyFromPair, getCurrencyTier } from './common';

/**
 * Fetches the trading fee tier depending on the order Eur amount
 * and user's rolling trading volume (if userId is provided).
 *
 * @param {number} orderAmount  order EUR amount.
 * @param {string} pair         order currency pair.
 * @param {string} userId       user id.
 */
export const getOrderTier = async (
  orderAmount: number,
  pair: CurrencyPair,
  userId?: string
): Promise<TradingFeeTierDoc> => {
  const currency = cryptoCurrencyFromPair[pair];

  if (userId) {
    const user = await getUser(userId);

    const totalVolume = Big(orderAmount).plus(user.rollingTradingVolume ?? 0);
    const totalVolumeNumber = Number(totalVolume.toFixed(ORDER_AMOUNT_PRECISION));
    const feeTiers = await getFeeTiers(user, totalVolumeNumber);
    const feeTier = getCurrencyTier(feeTiers, currency);

    return feeTier;
  }

  const feeTiers = await getFeeTiersForVolume(orderAmount);
  const feeTier = getCurrencyTier(feeTiers, currency);

  return feeTier;
};
