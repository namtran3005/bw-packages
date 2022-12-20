import Big from 'big.js';
import { cachedQuotesRepo } from '@bitwala-cryptobank-squad/package-repositories-main';

import { ORDER_AMOUNT_PRECISION } from '../constants';
import { FeeConfigRecord } from '../integrations/trading-core/types';
import { Currency, CurrencyPair, FeeOptionKey, OrderEntryInput, TradingFeeTierDoc, UserDoc } from '../types';
import { getOrderTier } from './getOrderTier';
import { TradingFees } from './index';

export const getOrderFeeOptionName = (tradingFeesClient: TradingFees) =>
  /**
   * Considering the user's rolling traded volume and order amount,
   * we fetch the tier and set the correspondent fee to the order.
   * If there's no user, only order amount counts.
   *
   * @param {object} input            order entry input.
   * @param {string} pair             currency pair.
   * @param {string} feeOptionKey     'standardTcFeeOption' | 'savingsPlanTcFeeOption'
   * @param {object} user             user doc.
   */
  async (
    input: OrderEntryInput,
    pair: CurrencyPair,
    feeOptionKey: FeeOptionKey,
    user?: UserDoc
  ) => {
    const amount = await getOrderAmount(input, pair);
    const feeTier = await getOrderTier(amount, pair, user?._id);

    if (isSellOrder(input)) {
      const feeConfigs = await tradingFeesClient.getFeeConfigs();
      const pairFeeConfigs = feeConfigs.filter(config => config.pair === pair);
      const sellFeeTier = await unsureCorrectSellFeeTier(
        pair,
        amount,
        feeTier,
        pairFeeConfigs,
        feeOptionKey,
        user
      );

      return sellFeeTier[feeOptionKey]
    }

    return feeTier[feeOptionKey]
  };

const getOrderAmount = async (input: OrderEntryInput, pair: CurrencyPair) => {
  if (isSellOrder(input)) {
    const recentQuote = await getRecentQuote(pair);

    const inputAmount = Big(input.amount).toFixed(8);
    const conversionRate = Big(recentQuote.bid);
    const convertedEurAmount = conversionRate.mul(inputAmount);

    return Number(convertedEurAmount.toFixed(2));
  }

  return input.amount;
};

const isSellOrder = (input: OrderEntryInput) =>
  [Currency.BTC, Currency.ETH].includes(input.currency);

const getRecentQuote = async (pair: CurrencyPair) => {
  const recentQuote = await cachedQuotesRepo.getRecentCachedQuote(pair);
  if (!recentQuote) {
    throw new Error(`Quote not found for ${pair}`);
  }

  return recentQuote;
};

const unsureCorrectSellFeeTier = async (
  pair: CurrencyPair,
  inputAmount: number,
  initialFeeTier: TradingFeeTierDoc,
  feeConfigs: FeeConfigRecord[],
  feeOptionKey: FeeOptionKey,
  user?: UserDoc
): Promise<TradingFeeTierDoc> => {
  const outputAmount = await calculateSellOutputVolume(
    pair,
    feeConfigs,
    inputAmount,
    initialFeeTier[feeOptionKey]
  );

  const totalVolume = outputAmount + (user?.rollingTradingVolume ?? 0)
  if (
    totalVolume >= initialFeeTier.volumeLowerBound &&
    totalVolume < initialFeeTier.volumeUpperBound
  ) {
    return initialFeeTier;
  }

  const feeTier = await getOrderTier(outputAmount, pair, user?._id);

  return await unsureCorrectSellFeeTier(
    pair,
    inputAmount,
    feeTier,
    feeConfigs,
    feeOptionKey,
    user
  );
};

const calculateSellOutputVolume = async (
  pair: CurrencyPair,
  feeConfigs: FeeConfigRecord[],
  convertedEurAmount: number,
  feeOptionName: string
) => {
  const feeConfig = getFeeConfig(pair, feeConfigs, feeOptionName);

  const minServiceFeeAmount = Big(feeConfig.minimumBitwalaFee);
  const serviceFeeTierFraction = Big(feeConfig.bitwalaFee);
  const serviceFeeTierAmount = Big(convertedEurAmount).mul(
    serviceFeeTierFraction
  );

  const shouldApplyMinServiceFee = feeConfig.minimumBitwalaFeeApplies && serviceFeeTierAmount.lt(minServiceFeeAmount)
  const serviceFeeAmount = shouldApplyMinServiceFee
    ? minServiceFeeAmount
    : serviceFeeTierAmount;

  const outputAmount = Big(convertedEurAmount).minus(serviceFeeAmount);

  return Number(outputAmount.toFixed(ORDER_AMOUNT_PRECISION));
};

const getFeeConfig = (pair: CurrencyPair, feeConfigs: FeeConfigRecord[], feeOptionName: string) => {
  const feeConfig = feeConfigs.find(
    (config: FeeConfigRecord) => config.feeOptionName === feeOptionName && config.pair === pair
  );
  if (!feeConfig) {
    throw new Error(`Fee config not found for ${feeOptionName}`);
  }

  return feeConfig;
};
