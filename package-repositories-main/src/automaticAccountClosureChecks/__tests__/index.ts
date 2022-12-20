import { insertAutomaticAccountClosureChecks } from '../lib/insertAutomaticAccountClosureChecks';

import { automaticAccountClosureChecksRepo } from '../index';

describe('automatic account closureChecks repo', () => {
  it('should export insert method', () => {
    expect(automaticAccountClosureChecksRepo.insert).toBe(insertAutomaticAccountClosureChecks);
  });
});
