import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisAccountSchema,
  SolarisAccountDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisAccountSchema.plugin(mongooseLeanId);

export const SolarisAccountModel = mainConnection.db.model<SolarisAccountDoc>(
  'SolarisAccounts',
  solarisAccountSchema
);
