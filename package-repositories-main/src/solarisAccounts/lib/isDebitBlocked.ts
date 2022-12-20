import { LockingStatus } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';

export const isDebitBlocked = (account: DocumentDefinition<SolarisAccountDoc>): boolean => {
  return !!(
    account.lockingStatus &&
    [LockingStatus.DEBIT_BLOCK, LockingStatus.BLOCK].includes(
      account.lockingStatus
    )
  );
};
