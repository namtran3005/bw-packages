import { upsertSeizure } from '../lib/upsertSeizure';
import { solarisSeizuresRepo } from '../index';
import { deleteSeizureBySolarisId } from '../lib/deleteSeizureBySolarisId';

describe('solaris seizures repo entry point', () => {
  it('should export upsert seizure method', () => {
    expect(solarisSeizuresRepo.upsert).toBe(upsertSeizure);
  });

  it('should export delete seizure method', () => {
    expect(solarisSeizuresRepo.deleteBySolarisId).toBe(
      deleteSeizureBySolarisId
    );
  });
});
