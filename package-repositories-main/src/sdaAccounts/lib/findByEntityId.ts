import { SdaAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountModel } from '../model';

export const findByEntityId = (entityId: string): Promise<DocumentDefinition<SdaAccountDoc>[]> => {
  return SdaAccountModel.find({ entityId }).lean().exec();
};
