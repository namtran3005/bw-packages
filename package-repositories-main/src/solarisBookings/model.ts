import mongooseLeanId from 'mongoose-lean-id';

import {
  solarisBookingSchema,
  SolarisBookingDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisBookingSchema.plugin(mongooseLeanId);

export const SolarisBookingModel = mainConnection.db.model<SolarisBookingDoc>(
  'SolarisBookings',
  solarisBookingSchema
);
