import { Currencies } from '@bitwala-cryptobank-squad/package-utils';
import { currencyToCoin } from '../currencyToCoin';
import { Coin } from '../types';

describe('parseCryptoUrl', () => {
  const testData = [
    ['production', Currencies.BTC, Coin.BTC],
    ['production', Currencies.ETH, Coin.ETH],

    ['staging', Currencies.BTC, Coin.TBTC],
    ['staging', Currencies.ETH, Coin.TETH],

    ['development', Currencies.BTC, Coin.TBTC],
    ['development', Currencies.ETH, Coin.TETH],

    ['test', Currencies.BTC, Coin.TBTC],
    ['test', Currencies.ETH, Coin.TETH],

    ['production', Currencies.EUR, null],
    ['staging', Currencies.EUR, null],
  ];

  testData.forEach(item => {
    const [env, currency, coin] = item;
    const testType = !coin ? 'UNHAPPY' : 'HAPPY';

    it(`[${testType}] ${currency} should return ${coin} on ${env}`, () => {
      const result = currencyToCoin(env as string, currency as Currencies);
      expect(result).toBe(coin);
    });
  });
});
