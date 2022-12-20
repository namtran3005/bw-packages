import { Identification } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisIdentificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisIdentificationModel } from '../model';

export const insertIdentification = (
  input: Identification & { owner: string }
): Promise<SolarisIdentificationDoc> => {
  return SolarisIdentificationModel.create(input);
};
