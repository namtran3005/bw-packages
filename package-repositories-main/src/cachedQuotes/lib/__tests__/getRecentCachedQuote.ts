/* eslint-disable @typescript-eslint/no-explicit-any */
import { CurrencyPair } from '@bitwala-cryptobank-squad/package-schemas';
import { getRecentCachedQuote } from '../getRecentCachedQuote';

import { CachedQuotesModel, CurrentQuotesModel } from '../../model';

const mockQuote = {
  pair: CurrencyPair.BTCEUR,
  bid: 9000,
  ask: 9000,
};

const results: any = {
  cachedQuotes: {
    found: {
      sort: jest.fn().mockImplementation(() => results.cachedQuotes.found),
      lean: jest.fn().mockImplementation(() => results.cachedQuotes.found),
      exec: jest.fn().mockImplementation(() => Promise.resolve(mockQuote)),
    },
  },
  currentQuotes: {
    found: {
      lean: jest.fn().mockImplementation(() => results.currentQuotes.found),
      exec: jest.fn().mockImplementation(() => Promise.resolve(mockQuote)),
    },
    empty: {
      lean: jest.fn().mockImplementation(() => results.currentQuotes.empty),
      exec: jest.fn().mockImplementation(() => Promise.resolve(null)),
    },
  },
};

describe('get most recent quote', () => {
  beforeAll(() => {
    jest
      .spyOn(CachedQuotesModel, 'findOne')
      .mockImplementation(() => results.cachedQuotes.found);
    jest
      .spyOn(CurrentQuotesModel, 'findOne')
      .mockImplementation(() => results.currentQuotes.found);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use cache when possible', async () => {
    const res = await getRecentCachedQuote(CurrencyPair.BTCEUR);
    expect(CachedQuotesModel.findOne).not.toBeCalled();
    expect(CurrentQuotesModel.findOne).toBeCalled();

    expect(results.currentQuotes.found.lean).toBeCalled();
    expect(results.currentQuotes.found.exec).toBeCalled();

    expect(res).toBe(mockQuote);
  });

  it('should do a heavier query if no cache available', async () => {
    jest
      .spyOn(CurrentQuotesModel, 'findOne')
      .mockImplementationOnce(() => results.currentQuotes.empty);

    const res = await getRecentCachedQuote(CurrencyPair.BTCEUR);

    expect(CachedQuotesModel.findOne).toBeCalled();
    expect(CurrentQuotesModel.findOne).toBeCalled();

    expect(results.currentQuotes.empty.lean).toBeCalled();
    expect(results.currentQuotes.empty.exec).toBeCalled();

    expect(results.cachedQuotes.found.sort).toBeCalled();
    expect(results.cachedQuotes.found.lean).toBeCalled();
    expect(results.cachedQuotes.found.exec).toBeCalled();
    expect(res).toBe(mockQuote);
  });
});
