import { Card, CardLimits } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisCardDoc, SolarisCardMeta } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisCardModel } from '../model';

export interface CardLimitsInput {
  limits?: CardLimits;
}

export const insert = (
  input: Card & { owner: string; meta?: SolarisCardMeta } & CardLimitsInput
): Promise<SolarisCardDoc> => {
  return SolarisCardModel.create(input);
};
