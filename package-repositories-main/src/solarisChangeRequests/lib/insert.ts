import {
  SolarisChangeRequest,
  SolarisChangeRequestsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisChangeRequestsModel } from '../model';

export const insert = (
  input: SolarisChangeRequest
): Promise<SolarisChangeRequestsDoc> => {
  return SolarisChangeRequestsModel.create(input);
};
