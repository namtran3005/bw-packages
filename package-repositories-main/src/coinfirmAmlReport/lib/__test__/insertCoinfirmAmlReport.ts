import { upsert } from '../upsert';

import { coinfirmAmlReportRepo } from '../../index';

describe('coinfirmAmlReport repo', () => {
  it('should export insert method', () => {
    expect(coinfirmAmlReportRepo.upsert).toBe(upsert);
  });
});
