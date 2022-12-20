import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisDeviceChallengeSchema,
  SolarisDeviceChallengeDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisDeviceChallengeSchema.plugin(mongooseLeanId);

export const SolarisDeviceChallengeModel = mainConnection.db.model<
  SolarisDeviceChallengeDoc
>('SolarisDeviceChallenges', solarisDeviceChallengeSchema);
