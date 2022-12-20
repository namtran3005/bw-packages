/* eslint-disable @typescript-eslint/no-explicit-any */
import { Currency } from '@bitwala-cryptobank-squad/package-schemas';
import * as utils from '../../utils';
import { QuotesHandler } from '../';
import { TradingCoreApiClient } from '../../client';
import { currencyMap, Errors } from '../../types';

const closeQuote = {
  bid: '6844.44',
  ask: '6863.26',
  quotedAt: new Date('2019-11-27T22:59:59.189Z'),
};

const tcQuotes = [
  {
    bid: 9000,
    ask: 18000,
    pair: 'BTCEUR',
    quotedAt: new Date('2019-01-01'),
  },
  {
    bid: 100,
    ask: 200,
    pair: 'ETHEUR',
    quotedAt: new Date('2019-01-01'),
  },
];

describe('Quotes Handler', () => {
  const client = new TradingCoreApiClient({
    baseUrl: '',
    apiVersion: '',
    apiKey: '',
  });

  const quotesHandler = new QuotesHandler(client);

  it('getBefore happy path', async () => {
    jest.spyOn(client, 'get').mockResolvedValueOnce(closeQuote);

    const res = await quotesHandler.getBefore(Currency.BTC);

    expect(res).toEqual(closeQuote);
  });

  it('getBefore: should throw', async () => {
    jest.spyOn(client, 'get').mockResolvedValueOnce([]);
    await expect(quotesHandler.getBefore(Currency.BTC)).rejects.toThrow(
      Errors.NO_QUOTE_TC
    );
  });

  it('getCurrent happy path', async () => {
    jest
      .spyOn(utils, 'getNow')
      .mockReturnValueOnce(tcQuotes[0].quotedAt.getTime());

    jest.spyOn(client, 'get').mockResolvedValueOnce(tcQuotes);

    const res = await quotesHandler.getCurrent(Currency.BTC);

    expect(res).toEqual({
      quotedAt: tcQuotes[0].quotedAt,
      bid: tcQuotes[0].bid,
      ask: tcQuotes[0].ask,
    });
  });

  it('getCurrent: should throw', async () => {
    jest.spyOn(client, 'get').mockResolvedValueOnce(undefined);

    await expect(quotesHandler.getCurrent(Currency.BTC)).rejects.toThrow(
      Errors.NO_QUOTE_TC
    );
  });

  it('buildRoute', async () => {
    const path1 = 'current';
    const route1 = quotesHandler.buildRoute(path1);
    expect(route1).toEqual('quotes/current');

    const path2 = currencyMap[Currency.BTC];
    const route2 = quotesHandler.buildRoute(path2);
    expect(route2).toEqual('quotes/BTCEUR');
  });
});
