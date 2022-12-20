/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AccountType,
  Currencies,
  MoneyUnit,
  LockingStatus,
  AccountStatus,
} from '@bitwala-cryptobank-squad/package-solaris';
import { canCoverAmount } from '../canCoverAmount';

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

describe('canCoverAmount', () => {
  it('should compare the account available balance to amount and return a boolean', () => {
    expect(
      canCoverAmount(mockAccount as any, {
        currency: Currencies.EUR,
        unit: MoneyUnit.CENTS,
        value: 100000,
      })
    ).toBe(false);

    expect(
      canCoverAmount(mockAccount as any, {
        currency: Currencies.EUR,
        unit: MoneyUnit.CENTS,
        value: 1000,
      })
    ).toBe(true);
  });
});
