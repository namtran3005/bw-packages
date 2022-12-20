import { MobileNumber } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisMobileNumberModel } from '../model';

export const insertMobileNumber = (input: MobileNumber & { owner: string }) => {
  return SolarisMobileNumberModel.create(input);
};
