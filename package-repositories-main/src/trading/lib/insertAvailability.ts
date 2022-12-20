import { TradingAvailabilityDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { tradingAvailabilityModel } from '../model';

export interface TradingAvailabilityCreate {
  isTradingAvailable: boolean;
}

export const insertAvailability = (
  tradingAvailability: TradingAvailabilityCreate
): Promise<TradingAvailabilityDoc> => {
  return tradingAvailabilityModel.create(tradingAvailability);
};
