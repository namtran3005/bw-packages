import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisPersonSchema,
  SolarisPersonDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisPersonSchema.plugin(mongooseLeanId);

export const SolarisPersonModel = mainConnection.db.model<SolarisPersonDoc>(
  'SolarisPersons',
  solarisPersonSchema
);
