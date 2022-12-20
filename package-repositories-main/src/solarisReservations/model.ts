import mongooseLeanId from 'mongoose-lean-id';

import {
  solarisReservationSchema,
  SolarisReservationDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisReservationSchema.plugin(mongooseLeanId);

export const SolarisReservationModel = mainConnection.db.model<
  SolarisReservationDoc
>('SolarisReservations', solarisReservationSchema);
