import { solarisAccountsRepo } from '../index';

import { canCoverAmount } from '../lib/canCoverAmount';
import { findAccountBySolarisId } from '../lib/findAccountBySolarisId';
import { insertAccount } from '../lib/insertAccount';
import { isDebitBlocked } from '../lib/isDebitBlocked';
import { mergeOne } from '../lib/mergeOne';
import { removeFields } from '../lib/removeFields';

describe('Solaris accounts repo', () => {
  it('should export canCoverAmount fn', () => {
    expect(solarisAccountsRepo.canCoverAmount).toBe(canCoverAmount);
  });
  it('should export findAccountBySolarisId fn', () => {
    expect(solarisAccountsRepo.findBySolarisId).toBe(findAccountBySolarisId);
  });
  it('should export insertAccount fn', () => {
    expect(solarisAccountsRepo.insert).toBe(insertAccount);
  });
  it('should export isDebitBlocked fn', () => {
    expect(solarisAccountsRepo.isDebitBlocked).toBe(isDebitBlocked);
  });
  it('should export mergeFetchedData fn', () => {
    expect(solarisAccountsRepo.mergeOne).toBe(mergeOne);
  });
  it('should export removeFieldsBySolarisId fn', () => {
    expect(solarisAccountsRepo.removeFieldsBySolarisId).toBe(removeFields);
  });
});
