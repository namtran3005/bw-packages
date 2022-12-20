import {
  EthereumWalletDoc,
  EthereumWalletInput,
} from '@bitwala-cryptobank-squad/package-schemas';
import { EthereumWalletModel } from '../model';

export const insertWallet = (
  wallet: EthereumWalletInput
): Promise<EthereumWalletDoc> => {
  return EthereumWalletModel.create(wallet);
};
