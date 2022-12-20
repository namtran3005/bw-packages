import { TradingAvailabilityDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { tradingAvailabilityModel } from '../model';

export const getAvailability = (): Promise<DocumentDefinition<TradingAvailabilityDoc> | null> => {
  return tradingAvailabilityModel
    .findOne({})
    .lean()
    .exec();
};
