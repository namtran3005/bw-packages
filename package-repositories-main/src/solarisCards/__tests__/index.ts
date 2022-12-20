import { solarisCardsRepo } from '../index';

import { findOneBySolarisId } from '../lib/findOneBySolarisId';
import { findOneByOwner } from '../lib/findOneByOwner';
import { insert } from '../lib/insert';
import { mergeOne } from '../lib/mergeOne';

describe('Solaris Cards repo', () => {
  it('should export findOneBySolarisId fn', () => {
    expect(solarisCardsRepo.findOneBySolarisId).toBe(findOneBySolarisId);
  });
  it('should export findOneByOwner fn', () => {
    expect(solarisCardsRepo.findOneByOwner).toBe(findOneByOwner);
  });
  it('should export mergeOne fn', () => {
    expect(solarisCardsRepo.mergeOne).toBe(mergeOne);
  });
  it('should export insert fn', () => {
    expect(solarisCardsRepo.insert).toBe(insert);
  });
});
