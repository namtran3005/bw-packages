import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { findOneByOwner } from './lib/findOneByOwner';
import { insert } from './lib/insert';

export { SdaApprovalMethodModel } from './model';

export const sdaApprovalMethodRepo = {
  findOneBySolarisId,
  findOneByOwner,
  insert,
};
