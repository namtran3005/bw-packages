import { SepaCreditTransferDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SepaCreditTransfer } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SepaCreditTransferModel } from '../model';

export const upsertOne = (
  transferSolarisId: string,
  data: SepaCreditTransfer
): Promise<DocumentDefinition<SepaCreditTransferDoc> | null> => {
  return SepaCreditTransferModel.findOneAndUpdate(
    { solarisId: transferSolarisId },
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
