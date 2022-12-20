import {
  SdaAccountClosureRequestDoc,
  SdaAccountClosureRequest,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountClosureRequestModel } from '../model';

export const upsertOne = (
  solarisId: string,
  data: SdaAccountClosureRequest
): Promise<DocumentDefinition<SdaAccountClosureRequestDoc> | null> => {
  return SdaAccountClosureRequestModel.findOneAndUpdate(
    { solarisId },
    { $set: data },
    {
      new: true,
      upsert: true,
    }
  )
    .lean()
    .exec();
};
