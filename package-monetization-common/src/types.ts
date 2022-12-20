import IORedis from 'ioredis';
import { tradingFeeTiersRepo, usersRepo } from '@bitwala-cryptobank-squad/package-repositories-main';

type ResolvedValue<T extends (...args: never) => Promise<unknown>> = NonNullable<Awaited<ReturnType<T>>>;

export type UserDoc = ResolvedValue<typeof usersRepo.getUserById>;

export type TradingFeeTierDoc = ResolvedValue<typeof tradingFeeTiersRepo.getByTierId>;

export enum Currency {
  BTC = 'BTC',
  ETH = 'ETH',
  EUR = 'EUR'
}

export enum CurrencyPair {
  BTCEUR = 'BTCEUR',
  ETHEUR = 'ETHEUR'
}

export type OrderEntryInput = {
  amount: number;
  currency: Currency;
};

// Based on https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
export const FeeOptionKey = {
  standardFee: 'standardTcFeeOption',
  savingsPlanFee: 'savingsPlanTcFeeOption'
} as const;
export type FeeOptionKey = (typeof FeeOptionKey)[keyof typeof FeeOptionKey];

export interface TradingFeesConfig {
  redis: IORedis.Redis
  tradingCoreBaseUrl: string;
  tradingCoreApiKey: string;
}

export type MonetizationCommonConfig = TradingFeesConfig