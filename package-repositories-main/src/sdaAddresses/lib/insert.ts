import { SdaAddress, SdaAddressDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SdaAddressModel } from '../model';

export const insert = (input: SdaAddress): Promise<SdaAddressDoc> => {
  return SdaAddressModel.create(input);
};
