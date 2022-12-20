import {
  SdaApprovalRequestDoc,
  SdaApprovalRequest,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SdaApprovalRequestModel } from '../model';

export const insert = (
  input: SdaApprovalRequest
): Promise<SdaApprovalRequestDoc> => {
  return SdaApprovalRequestModel.create(input);
};
