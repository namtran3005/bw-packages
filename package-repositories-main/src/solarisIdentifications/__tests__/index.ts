import { findLastIdentification } from '../lib/findLastIdentification';
import { insertIdentification } from '../lib/insertIdentification';
import { mergeFetchedData } from '../lib/mergeFetchedData';
import { findLastSuccessfulIdentification } from '../lib/findLastSuccessfulIdentification';
import { findLastAutoIdentByOwner } from '../lib/findLastAutoIdentByOwner';

import { solarisIdentificationsRepo } from '../index';

describe('solaris identifications repo', () => {
  it('should export find last ident method', () => {
    expect(solarisIdentificationsRepo.findLast).toBe(findLastIdentification);
  });
  it('should export insert method', () => {
    expect(solarisIdentificationsRepo.insert).toBe(insertIdentification);
  });
  it('should export merge fetched data method', () => {
    expect(solarisIdentificationsRepo.mergeFetchedData).toBe(mergeFetchedData);
  });
  it('should export find last successful ident method', () => {
    expect(solarisIdentificationsRepo.findLastSuccessfulIdentification).toBe(
      findLastSuccessfulIdentification
    );
  });
  it('should export find last ident using the idnow_autoident method', () => {
    expect(solarisIdentificationsRepo.findLastAutoIdentByOwner).toBe(
      findLastAutoIdentByOwner
    );
  });
});
