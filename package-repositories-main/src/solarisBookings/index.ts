import { upsertBooking } from './lib/upsertBooking';
import { findOneById } from './lib/findOneById';
import { findEtfTransaction } from './lib/findEtfTransaction';

export { SolarisBookingModel } from './model';

export const solarisBookingsRepo = {
  upsert: upsertBooking,
  findOneById,
  findEtfTransaction,
};
