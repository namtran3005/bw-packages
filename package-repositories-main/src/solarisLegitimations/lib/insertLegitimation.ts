import { Legitimation } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisLegitimationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisLegitimationsModel } from '../model';

export const insertLegitimation = (
  input: Legitimation & { owner: string }
): Promise<SolarisLegitimationDoc> => {
  return SolarisLegitimationsModel.create(input);
};
