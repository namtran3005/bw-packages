import { TradingFeesConfig } from '../types';
import { TradingCore } from '../integrations/trading-core';
import { getUserTiers } from './getUserTiers';
import { getOrderTier } from './getOrderTier';
import { getTradingCoreFeeConfigs } from './getFeeConfigs';
import { getOrderFeeOptionName } from './getOrderFeeOptionName';

export class TradingFees {
  public getUserTiers: typeof getUserTiers
  public getOrderTier: typeof getOrderTier
  public getFeeConfigs: ReturnType<typeof getTradingCoreFeeConfigs>
  public getOrderFeeOptionName: ReturnType<typeof getOrderFeeOptionName>

  private tradingCoreClient: TradingCore;


  constructor(config: TradingFeesConfig) {
    this.tradingCoreClient = new TradingCore({
      url: config.tradingCoreBaseUrl,
      apiKey: config.tradingCoreApiKey,
    })

    this.getUserTiers = getUserTiers;
    this.getOrderTier = getOrderTier;
    this.getFeeConfigs = getTradingCoreFeeConfigs(config.redis, this.tradingCoreClient);
    this.getOrderFeeOptionName = getOrderFeeOptionName(this);
  }
}
