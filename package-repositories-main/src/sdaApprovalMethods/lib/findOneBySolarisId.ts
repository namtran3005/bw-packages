import { SdaApprovalMethodDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaApprovalMethodModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SdaApprovalMethodDoc> | null> => {
  return SdaApprovalMethodModel.findOne({ solarisId })
    .lean()
    .exec();
};
