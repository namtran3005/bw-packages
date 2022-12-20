import { findOneReport } from '../lib/findOneReport';
import { insert } from '../lib/insert';

import { chainalysisAmlReportsRepo } from '../index';

describe('chainalysisAmlReportsRepo', () => {
  it('should export `findOneReport`', () => {
    expect(chainalysisAmlReportsRepo.findOneReport).toBe(findOneReport);
  });
  it('should export `insert`', () => {
    expect(chainalysisAmlReportsRepo.insert).toBe(insert);
  });
});
