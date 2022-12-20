import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisDeviceRestrictedSchema,
  SolarisDeviceRestrictedDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisDeviceRestrictedSchema.plugin(mongooseLeanId);

export const SolarisDeviceRestrictedModel = mainConnection.db.model<SolarisDeviceRestrictedDoc>(
  'SolarisDevicesRestricted',
  solarisDeviceRestrictedSchema
);
