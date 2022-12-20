import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisDeviceSchema,
  SolarisDeviceDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisDeviceSchema.plugin(mongooseLeanId);

export const SolarisDeviceModel = mainConnection.db.model<SolarisDeviceDoc>(
  'SolarisDevices',
  solarisDeviceSchema
);
