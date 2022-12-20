import { TradingFeeTierDoc } from "../types";
import { getFeeTiers, getUser } from './common';

/**
 * Fetches the trading fee tiers depending only
 * on user's rolling trading volume.
 *
 * @param {string} userId      user id.
 */
export const getUserTiers = async (userId: string): Promise<TradingFeeTierDoc[]> => {
  const user = await getUser(userId);

  const totalVolume = user.rollingTradingVolume ?? 0;
  const feeTiers = await getFeeTiers(user, totalVolume);

  return feeTiers;
};
