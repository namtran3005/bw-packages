import { TaxIdentification } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisTaxIdentificationModel } from '../model';

export const insertTaxIdentification = (
  input: TaxIdentification & { owner: string }
) => {
  return SolarisTaxIdentificationModel.create(input);
};
