import { SdaApprovalMethodDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaApprovalMethodModel } from '../model';

export const findOneByOwner = (
  owner: string
): Promise<DocumentDefinition<SdaApprovalMethodDoc> | null> => {
  return SdaApprovalMethodModel.findOne({ owner })
    .lean()
    .exec();
};
