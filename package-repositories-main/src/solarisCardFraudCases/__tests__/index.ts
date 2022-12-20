import { solarisCardFraudCasesRepo } from '../index';

import { findPendingByOwner } from '../lib/findPendingByOwner';
import { findOneBySolarisId } from '../lib/findOneBySolarisId';
import { upsert } from '../lib/upsert';
import { mergeOne } from '../lib/mergeOne';

describe('Solaris Cards repo', () => {
  it('should export findPendingByOwner fn', () => {
    expect(solarisCardFraudCasesRepo.findPendingByOwner).toBe(
      findPendingByOwner
    );
  });
  it('should export findOneBySolarisId fn', () => {
    expect(solarisCardFraudCasesRepo.findOneBySolarisId).toBe(
      findOneBySolarisId
    );
  });
  it('should export mergeOne fn', () => {
    expect(solarisCardFraudCasesRepo.mergeOne).toBe(mergeOne);
  });
  it('should export upsert fn', () => {
    expect(solarisCardFraudCasesRepo.upsert).toBe(upsert);
  });
});
