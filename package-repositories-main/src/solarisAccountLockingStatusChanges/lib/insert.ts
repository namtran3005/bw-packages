import {
  SolarisAccountLockingStatusChangeInput,
  SolarisAccountLockingStatusChangeDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisAccountLockingStatusChangeModel } from '../model';

export const insert = (
  input: SolarisAccountLockingStatusChangeInput
): Promise<SolarisAccountLockingStatusChangeDoc> => {
  return SolarisAccountLockingStatusChangeModel.create(input);
};
