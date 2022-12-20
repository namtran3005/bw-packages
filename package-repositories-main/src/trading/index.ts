import { insertAvailability } from './lib/insertAvailability';
import { getAvailability } from './lib/getAvailability';
import { updateTradingAvailability } from './lib/updateAvailability';

export { tradingAvailabilityModel } from './model';

export const availabilityRepo = {
  insert: insertAvailability,
  get: getAvailability,
  update: updateTradingAvailability,
};
