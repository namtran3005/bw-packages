import { SdaAccount, SdaAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SdaAccountModel } from '../model';

export const insert = (input: SdaAccount): Promise<SdaAccountDoc> => {
  return SdaAccountModel.create(input);
};
