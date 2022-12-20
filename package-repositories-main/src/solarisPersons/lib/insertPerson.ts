import { SolarisPersonMeta, PersonInput } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisPersonModel } from '../model';

export const insertPerson = (
  input: PersonInput & { owner: string; meta?: SolarisPersonMeta }
) => {
  return SolarisPersonModel.create(input);
};
