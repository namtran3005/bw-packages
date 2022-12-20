import {
  SolarisDeviceDoc,
  SolarisDeviceSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisDeviceRestrictedModel } from '../model';

export const insert = (
  data: SolarisDeviceSchema
): Promise<SolarisDeviceDoc> => {
  return SolarisDeviceRestrictedModel.create(data);
};
