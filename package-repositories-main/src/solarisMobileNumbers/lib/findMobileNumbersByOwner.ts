import { SolarisMobileNumberDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisMobileNumberModel } from '../model';

export const findMobileNumbersByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisMobileNumberDoc>[]> => {
  return SolarisMobileNumberModel.find({ owner })
    .lean()
    .exec();
};
