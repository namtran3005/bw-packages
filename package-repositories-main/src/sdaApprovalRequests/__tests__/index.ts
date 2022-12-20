import { sdaApprovalRequestRepo } from '../index';

import { findOneByOwner } from '../lib/findOneByOwner';
import { findOneBySolarisId } from '../lib/findOneBySolarisId';
import { insert } from '../lib/insert';

describe('sDA approval requests repo', () => {
  it('should export insertSepaCreditTransfer fn', () => {
    expect(sdaApprovalRequestRepo.findOneByOwner).toBe(findOneByOwner);
  });
  it('should export merge transfer method', () => {
    expect(sdaApprovalRequestRepo.findOneBySolarisId).toBe(findOneBySolarisId);
  });
  it('should export find one by id method', () => {
    expect(sdaApprovalRequestRepo.insert).toBe(insert);
  });
});
