import { IneligibleUserDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { IneligibleUserModel } from '../model';

export const getIneligibleUserByEmail = (
  email: string
): Promise<DocumentDefinition<IneligibleUserDoc> | DocumentDefinition<IneligibleUserDoc>[] | null> => {
  return IneligibleUserModel.findOne({ email })
    .lean()
    .exec();
};
