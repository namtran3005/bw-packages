import { Currencies } from '@bitwala-cryptobank-squad/package-utils';
import { Coin } from './types';

interface NetworkMap {
  main: Coin;
  test: Coin;
}
type CryptoCurrencies = Currencies.BTC | Currencies.ETH;
type CoinMap = { [key in CryptoCurrencies]: NetworkMap };

export const currencyToCoin = (env: string, currency: Currencies) => {
  try {
    const currencyToCoinMap: CoinMap = {
      BTC: {
        main: Coin.BTC,
        test: Coin.TBTC,
      },
      ETH: {
        main: Coin.ETH,
        test: Coin.TETH,
      },
    };
    const network = env.includes('production') ? 'main' : 'test';
    return currencyToCoinMap[currency as CryptoCurrencies][network];
  } catch (err) {
    return null;
  }
};
