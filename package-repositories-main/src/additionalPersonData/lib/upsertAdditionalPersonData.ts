import {
  AdditionalPersonDataDoc, AdditionalPersonDataInput
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { AdditionalPersonDataModel } from '../model';

export const upsertAdditionalPersonData = (
  userId: string,
  data: AdditionalPersonDataInput
): Promise<DocumentDefinition<AdditionalPersonDataDoc> | null> => {
  return AdditionalPersonDataModel.findOneAndUpdate(
    { userId: userId },
    { $set: data },
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
