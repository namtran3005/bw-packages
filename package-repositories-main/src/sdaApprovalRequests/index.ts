import { findOneBySolarisId } from './lib/findOneBySolarisId';
import { findOneByOwner } from './lib/findOneByOwner';
import { insert } from './lib/insert';

export { SdaApprovalRequestModel } from './model';

export const sdaApprovalRequestRepo = {
  findOneBySolarisId,
  findOneByOwner,
  insert,
};
