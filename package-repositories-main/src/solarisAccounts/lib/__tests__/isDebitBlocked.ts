/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AccountType,
  Currencies,
  MoneyUnit,
  LockingStatus,
  AccountStatus,
} from '@bitwala-cryptobank-squad/package-solaris';
import { isDebitBlocked } from '../isDebitBlocked';

const mockAccount = {
  owner: 'userId',
  solarisId: 'solarisId',
  iban: 'DE89370400440532013000',
  bic: 'AACHDE31XXX',
  type: AccountType.CHECKING_BUSINESS,
  balance: {
    currency: Currencies.EUR,
    unit: MoneyUnit.CENTS,
    value: 10000,
  },
  availableBalance: {
    currency: Currencies.EUR,
    unit: MoneyUnit.CENTS,
    value: 10000,
  },
  lockingStatus: LockingStatus.NO_BLOCK,
  accountLimit: {
    currency: Currencies.EUR,
    unit: MoneyUnit.CENTS,
    value: 100000,
  },
  personId: 'personId',
  status: AccountStatus.ACTIVE,
};

describe('isDebitBlocked', () => {
  it('should check for account locking status', () => {
    expect(isDebitBlocked(mockAccount as any)).toBe(false);
    expect(
      isDebitBlocked({
        ...mockAccount,
        lockingStatus: LockingStatus.DEBIT_BLOCK,
      } as any)
    ).toBe(true);
    expect(
      isDebitBlocked({
        ...mockAccount,
        lockingStatus: LockingStatus.BLOCK,
      } as any)
    ).toBe(true);
    expect(
      isDebitBlocked({
        ...mockAccount,
        lockingStatus: LockingStatus.CREDIT_BLOCK,
      } as any)
    ).toBe(false);
  });
});
