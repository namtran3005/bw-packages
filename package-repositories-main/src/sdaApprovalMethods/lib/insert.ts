import {
  SdaApprovalMethod,
  SdaApprovalMethodDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SdaApprovalMethodModel } from '../model';

export const insert = (
  input: SdaApprovalMethod
): Promise<SdaApprovalMethodDoc> => {
  return SdaApprovalMethodModel.create(input);
};
