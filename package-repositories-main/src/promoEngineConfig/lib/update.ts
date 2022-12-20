import {
  PromoEngineConfigInput,
  PromoEngineConfigDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { PromoEngineConfigModel } from '../model';

export const update = (
  input: PromoEngineConfigInput
): Promise<DocumentDefinition<PromoEngineConfigDoc> | null> => {
  return PromoEngineConfigModel.findOneAndUpdate(
    { staticConfigName: input.staticConfigName },
    { $set: input },
    { upsert: true }
  )
    .lean()
    .exec();
};
