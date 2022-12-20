import { SdaAccountDoc, SdaAccount } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountModel } from '../model';

export const updateOne = (
  solarisId: string,
  input: Partial<SdaAccount>
): Promise<DocumentDefinition<SdaAccountDoc> | null> => {
  return SdaAccountModel.findOneAndUpdate(
    { solarisId },
    { $set: input },
    { runValidators: true }
  )
    .lean({ getters: true })
    .exec();
};
