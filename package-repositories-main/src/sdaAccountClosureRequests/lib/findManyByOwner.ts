import { SdaAccountClosureRequestDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountClosureRequestModel } from '../model';

export const findManyByOwner = (
  owner: string
): Promise<DocumentDefinition<SdaAccountClosureRequestDoc>[]> => {
  return SdaAccountClosureRequestModel.find({ owner }).lean().exec();
};
