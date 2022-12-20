import {
  SolarisDeviceChallengeDoc,
  SolarisDeviceChallengeSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisDeviceChallengeModel } from '../model';

export const insert = (
  data: SolarisDeviceChallengeSchema
): Promise<SolarisDeviceChallengeDoc> => {
  return SolarisDeviceChallengeModel.create(data);
};
