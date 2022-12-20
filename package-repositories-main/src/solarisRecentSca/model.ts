import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisRecentScaSchema,
  SolarisRecentScaDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisRecentScaSchema.plugin(mongooseLeanId);

export const SolarisRecentScaModel = mainConnection.db.model<SolarisRecentScaDoc>(
  'SolarisRecentSca',
  solarisRecentScaSchema
);
