import { BitcoinWalletDoc, BitcoinWalletInput } from '@bitwala-cryptobank-squad/package-schemas';
import { BitcoinWalletModel } from '../model';

export const insertWallet = (
  wallet: BitcoinWalletInput
): Promise<BitcoinWalletDoc> => {
  return BitcoinWalletModel.create(wallet);
};
