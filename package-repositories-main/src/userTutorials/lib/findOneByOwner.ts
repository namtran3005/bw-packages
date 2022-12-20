import { UserTutorialsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserTutorialsModel } from '../model';

export const findOneByOwner = (
  owner: string
): Promise<DocumentDefinition<UserTutorialsDoc> | null> => {
  return UserTutorialsModel.findOne({ owner }).lean().exec();
};
