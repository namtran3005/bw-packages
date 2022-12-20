import { BitcoinTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { BitgoTransactionStatus } from '@bitwala-cryptobank-squad/package-utils';
import { DocumentDefinition } from 'mongoose';
import { BitcoinTransactionModel } from '../model';

export const findOneByOwnerStateAddressValue = (
  owner: string,
  state: BitgoTransactionStatus,
  address: string,
  value: number
): Promise<DocumentDefinition<BitcoinTransactionDoc> | null> => {
  return BitcoinTransactionModel.findOne({
    owner,
    state,
    'entries.address': address,
    'entries.value': value,
  })
    .lean()
    .exec();
};
