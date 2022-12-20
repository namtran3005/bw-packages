import { SdaAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountModel } from '../model';

export const findManyByOwner = (owner: string): Promise<DocumentDefinition<SdaAccountDoc>[]> => {
  return SdaAccountModel.find({ owner }).lean().exec();
};
