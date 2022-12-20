import {
  SolarisDeviceDoc,
  SolarisDeviceSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisDeviceModel } from '../model';

export const insert = (
  data: SolarisDeviceSchema
): Promise<SolarisDeviceDoc> => {
  return SolarisDeviceModel.create(data);
};
