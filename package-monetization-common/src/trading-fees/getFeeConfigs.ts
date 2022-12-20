import IORedis from "ioredis";
import * as yup from 'yup';
import { logger } from "@bitwala-cryptobank-squad/package-logger";

import { FEE_CONFIGS_CACHE_EXPIRATION, FEE_CONFIGS_CACHE_KEY } from "../constants";
import { FeeConfigRecord } from "../integrations/trading-core/types";
import { TradingCore } from "../integrations/trading-core";

const log = logger('MONETIZATION_COMMON_GET_TC_FEE_CONFIGS');

/**
 * Fetches all fee configs, fetching from the cache first, if available.
 */
export const getTradingCoreFeeConfigs = (redis: IORedis.Redis, tradingCoreClient: TradingCore) =>
  async (): Promise<FeeConfigRecord[]> => {
    const cachedFeeConfigs = await fetchCachedFeeConfigs(redis);
    if (cachedFeeConfigs) {
      return cachedFeeConfigs;
    }

    return await fetchTradingCoreFeeConfigs(redis, tradingCoreClient);
  };

const fetchCachedFeeConfigs = async (redis: IORedis.Redis): Promise<FeeConfigRecord[] | null> => {
  try {
    const cachedResponse = await redis.get(FEE_CONFIGS_CACHE_KEY);
    const cachedFeeConfigs = cachedResponse && JSON.parse(cachedResponse);

    if (!isValidFeeConfigRecords(cachedFeeConfigs)) return null;

    return cachedFeeConfigs;
  } catch (error) {
    log.error(error);
    return null;
  }
}

const fetchTradingCoreFeeConfigs = async (redis: IORedis.Redis, tradingCoreClient: TradingCore): Promise<FeeConfigRecord[]> => {
  
  const feeConfigs = await tradingCoreClient.feeConfigs.getFeeConfigs();
  
  if (!isValidFeeConfigRecords(feeConfigs)) {
    throw new Error('Fetched fee config records are not valid');
  }

  await redis.set(
    FEE_CONFIGS_CACHE_KEY,
    JSON.stringify(feeConfigs),
    'ex',
    FEE_CONFIGS_CACHE_EXPIRATION
  );

  return feeConfigs;
}

const feeConfigRecordSchema = yup.object().shape({
  id: yup.string().required(),
  bitwalaFee: yup.number().required(),
  networkFee: yup.number().required(),
  feeOptionName: yup.string().required(),
  minimumBitwalaFee: yup.number().required(),
  minimumBitwalaFeeApplies: yup.boolean().required(),
  setAt: yup.date().required(),
  updatedAt: yup.date().notRequired(),
  active: yup.boolean().notRequired()
});

const isValidFeeConfigRecords = (feeConfigsRecords: FeeConfigRecord[] | null): boolean => {
  if (!(feeConfigsRecords && feeConfigsRecords.length > 0)) {
    return false
  }

  const hasAnyInvalidRecord = !(feeConfigsRecords.find(feeConfig => feeConfigRecordSchema.isValidSync(feeConfig) === false))

  return hasAnyInvalidRecord;
};