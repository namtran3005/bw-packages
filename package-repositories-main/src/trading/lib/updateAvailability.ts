import { TradingAvailabilityDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { tradingAvailabilityModel } from '../model';

export const updateTradingAvailability = (
  id: string,
  data: Partial<TradingAvailabilityDoc>
): Promise<DocumentDefinition<TradingAvailabilityDoc> | null> => {
  return tradingAvailabilityModel
    .findOneAndUpdate({ _id: id }, { $set: data })
    .lean()
    .exec();
};
