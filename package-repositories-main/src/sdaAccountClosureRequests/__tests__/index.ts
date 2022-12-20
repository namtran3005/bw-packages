import { sdaAccountClosureRequestRepo } from '../index';

import { findOneBySolarisId } from '../lib/findOneBySolarisId';
import { upsertOne } from '../lib/upsertOne';

describe('sDA approval requests repo', () => {
  it('should export findOneBySolarisId method', () => {
    expect(sdaAccountClosureRequestRepo.findOneBySolarisId).toBe(
      findOneBySolarisId
    );
  });
  it('should export upsertOne method', () => {
    expect(sdaAccountClosureRequestRepo.upsertOne).toBe(upsertOne);
  });
});
