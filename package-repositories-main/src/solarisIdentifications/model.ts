import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisIdentificationSchema,
  SolarisIdentificationDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisIdentificationSchema.plugin(mongooseLeanId);

export const SolarisIdentificationModel = mainConnection.db.model<
  SolarisIdentificationDoc
>('SolarisIdentifications', solarisIdentificationSchema);
