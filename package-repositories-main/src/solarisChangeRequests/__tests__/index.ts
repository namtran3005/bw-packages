import { insert } from '../lib/insert';
import { markUsedBySolarisId } from '../lib/markUsedBySolarisId';

import { solarisChangeRequestsRepo } from '../index';

describe('solaris change requests repo', () => {
  it('should export insert method', () => {
    expect(solarisChangeRequestsRepo.insert).toBe(insert);
  });
  it('should export mark as used by solaris id method', () => {
    expect(solarisChangeRequestsRepo.markUsedBySolarisId).toBe(
      markUsedBySolarisId
    );
  });
});
