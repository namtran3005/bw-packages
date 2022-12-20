import { getMonetizationStatus } from './common/getMonetizationStatus';
import { TradingFees as TradingFeesHandler } from './trading-fees';
import { MonetizationCommonConfig } from './types';
import { users } from "./users";

export * from './types';
export * from './constants';

export class MonetizationCommon {
  public getMonetizationStatus: typeof getMonetizationStatus;
  public tradingFees: TradingFeesHandler;
  public users: typeof users;

  constructor({
    redis,
    tradingCoreBaseUrl,
    tradingCoreApiKey
  }: MonetizationCommonConfig) {
    this.getMonetizationStatus = getMonetizationStatus;
    this.tradingFees = new TradingFeesHandler({
      redis,
      tradingCoreBaseUrl,
      tradingCoreApiKey
    });
    this.users = users;
  }
}