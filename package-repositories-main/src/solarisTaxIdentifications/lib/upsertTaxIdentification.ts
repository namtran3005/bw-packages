import { TaxIdentification } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisTaxIdentificationModel } from '../model';

export const upsertTaxIdentification = (
  input: TaxIdentification & { owner: string }
) => {
  return SolarisTaxIdentificationModel.findOneAndUpdate(
    { solarisId: input.solarisId },
    { $set: input },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  )
    .lean()
    .exec();
};
