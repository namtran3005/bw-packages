import { Account } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisAccountModel } from '../model';

export const insertAccount = (
  input: Account & { owner: string }
): Promise<SolarisAccountDoc> => {
  return SolarisAccountModel.create(input);
};
