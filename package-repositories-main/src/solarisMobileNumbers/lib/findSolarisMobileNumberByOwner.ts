import { SolarisMobileNumberDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisMobileNumberModel } from '../model';

export const findSolarisMobileNumberByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisMobileNumberDoc> | null> => {
  return SolarisMobileNumberModel.findOne({ owner })
    .lean()
    .exec();
};
