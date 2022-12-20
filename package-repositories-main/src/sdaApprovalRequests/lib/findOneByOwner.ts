import { SdaApprovalRequestDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaApprovalRequestModel } from '../model';

export const findOneByOwner = (
  owner: string
): Promise<DocumentDefinition<SdaApprovalRequestDoc> | null> => {
  return SdaApprovalRequestModel.findOne({ owner })
    .lean()
    .exec();
};
