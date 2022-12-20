import { SolarisTaxIdentificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisTaxIdentificationModel } from '../model';

export const findTaxIdentificationsByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisTaxIdentificationDoc>[]> => {
  return SolarisTaxIdentificationModel.find({ owner }, null, {
    sort: { primary: -1 },
  })
    .lean()
    .exec();
};
