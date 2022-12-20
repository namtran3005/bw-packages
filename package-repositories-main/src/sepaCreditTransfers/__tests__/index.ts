import { sepaCreditTransfersRepo } from '../index';

import { insertSepaCreditTransfer } from '../lib/insertSepaCreditTransfer';
import { mergeOne } from '../lib/mergeOne';
import { findOneById } from '../lib/findOneById';

describe('SEPA credit transfers repo', () => {
  it('should export insertSepaCreditTransfer fn', () => {
    expect(sepaCreditTransfersRepo.insert).toBe(insertSepaCreditTransfer);
  });
  it('should export merge transfer method', () => {
    expect(sepaCreditTransfersRepo.mergeOne).toBe(mergeOne);
  });
  it('should export find one by id method', () => {
    expect(sepaCreditTransfersRepo.findOneById).toBe(findOneById);
  });
});
