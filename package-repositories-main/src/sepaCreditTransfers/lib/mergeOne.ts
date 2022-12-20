import { SepaCreditTransferDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SepaCreditTransfer } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SepaCreditTransferModel } from '../model';

export const mergeOne = (
  transferSolarisId: string,
  data: SepaCreditTransfer
): Promise<DocumentDefinition<SepaCreditTransferDoc> | null> => {
  return SepaCreditTransferModel.findOneAndUpdate(
    { solarisId: transferSolarisId },
    { $set: data }
  )
    .lean()
    .exec();
};
