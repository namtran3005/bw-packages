import {
  bitcoinRegexTestnet,
  bitcoinRegexMainnet,
  nativeSegwitRegexTestnet,
  nativeSegwitRegexMainnet,
  ethereumRegexMainnet,
  ethereumRegexTestnet,
} from './regex';
import { Coin } from './types';

const validatorsMap: Record<Coin, (s: string) => boolean> = {
  [Coin.BTC]: (address: string) =>
    bitcoinRegexMainnet.test(address) || nativeSegwitRegexMainnet.test(address),
  [Coin.TBTC]: (address: string) =>
    bitcoinRegexTestnet.test(address) || nativeSegwitRegexTestnet.test(address),
  [Coin.ETH]: (address: string) => ethereumRegexMainnet.test(address),
  [Coin.TETH]: (address: string) => ethereumRegexTestnet.test(address),
};

export const testAddress = (coin: Coin, address: string) => {
  try {
    return validatorsMap[coin](address);
  } catch (e) {
    return false;
  }
};
