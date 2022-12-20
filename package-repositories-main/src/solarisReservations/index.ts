import { deleteOneById } from './lib/deleteOneById';
import { upsertReservation } from './lib/upsertReservation';
import { findOneById } from './lib/findOneById';
import { findOneByReference } from './lib/findOneByReference';

export { SolarisReservationModel } from './model';

export const solarisReservationsRepo = {
  deleteOneById,
  upsert: upsertReservation,
  findOneById,
  findOneByReference,
};
