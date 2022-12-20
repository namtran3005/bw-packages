import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisAccountLockingStatusChangeSchema,
  SolarisAccountLockingStatusChangeDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisAccountLockingStatusChangeSchema.plugin(mongooseLeanId);

export const SolarisAccountLockingStatusChangeModel = mainConnection.db.model<
  SolarisAccountLockingStatusChangeDoc
>(
  'SolarisAccountLockingStatusChanges',
  solarisAccountLockingStatusChangeSchema
);
