import { BitcoinWalletDoc, BitcoinWalletInput } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { BitcoinWalletModel } from '../model';

export const mergeOne = (
  bitgoId: string,
  data: Partial<BitcoinWalletInput>
): Promise<DocumentDefinition<BitcoinWalletDoc> | null> => {
  return BitcoinWalletModel.findOneAndUpdate(
    { bitgoId },
    { $set: data },
    { runValidators: true, new: true }
  )
    .lean()
    .exec();
};
