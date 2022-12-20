import mongooseLeanId from 'mongoose-lean-id';
import {
  solarisChallengeSmsSchema,
  SolarisChallengeSmsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

solarisChallengeSmsSchema.plugin(mongooseLeanId);

export const SolarisChallengeSmsModel = mainConnection.db.model<
  SolarisChallengeSmsDoc
>('SolarisChallengeSms', solarisChallengeSmsSchema);
