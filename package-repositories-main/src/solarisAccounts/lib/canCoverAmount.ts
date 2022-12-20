import { MoneyAmount } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisAccountDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';

export const canCoverAmount = (
  account: DocumentDefinition<SolarisAccountDoc>,
  amount: MoneyAmount
): boolean => {
  // assuming only EUR is available. If have more currencies later this probably will have to handle conversion
  return account.availableBalance.value >= amount.value;
};
