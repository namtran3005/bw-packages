import { findLastLegitimation } from '../lib/findLastLegitimation';
import { insertLegitimation } from '../lib/insertLegitimation';

import { solarisLegitimationsRepo } from '../index';

describe('solaris legitimations repo', () => {
  it('should export find last legitimation method', () => {
    expect(solarisLegitimationsRepo.findLast).toBe(findLastLegitimation);
  });
  it('should export insert legitimation method', () => {
    expect(solarisLegitimationsRepo.insert).toBe(insertLegitimation);
  });
});
