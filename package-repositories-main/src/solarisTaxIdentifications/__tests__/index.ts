import { insertTaxIdentification } from '../lib/insertTaxIdentification';
import { findTaxIdentificationsByOwner } from '../lib/findTaxIdentificationsByOwner';

import { solarisTaxIdentificationsRepo } from '../index';

describe('solaris TaxIdentifications repo', () => {
  it('should export insert method', () => {
    expect(solarisTaxIdentificationsRepo.insert).toBe(insertTaxIdentification);
  });
  it('should export find by owner method', () => {
    expect(solarisTaxIdentificationsRepo.findByOwner).toBe(
      findTaxIdentificationsByOwner
    );
  });
});
