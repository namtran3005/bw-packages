import { SdaApprovalRequestDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaApprovalRequestModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SdaApprovalRequestDoc> | null> => {
  return SdaApprovalRequestModel.findOne({ solarisId })
    .lean()
    .exec();
};
