import Path from 'path';
import { Currency } from '@bitwala-cryptobank-squad/package-schemas';
import { berlinTimeToUTC } from '@bitwala-cryptobank-squad/package-utils';
import { Handler } from '../handler';
import {
  currencyMap,
  TCQuote,
  Pair,
  Errors,
  QuoteParams,
  GetQuoteResponse,
  QuoteAppendix,
  BeforeQuoteParams,
} from '../../types';

export class QuotesHandler extends Handler {
  private basePath: string = 'quotes';

  public getCurrent = async (currency: Currency) => {
    const pair: Pair = currencyMap[currency];
    const route = this.buildRoute('current');

    return this.getQuote(pair, route);
  };

  public getBefore(currency: Currency, timestamp?: number) {
    const pair = currencyMap[currency];
    const route = this.buildRoute(pair);
    const params: BeforeQuoteParams = {
      t: timestamp || berlinTimeToUTC(new Date()).getTime(),
    };

    return this.getQuote(pair, route, params);
  }

  public buildRoute = (path: QuoteAppendix) => Path.join(this.basePath, path);

  private getQuote = async (
    pair: Pair,
    route: string,
    params?: QuoteParams
  ) => {
    const quoteData = await this.client.get<GetQuoteResponse>(route, params);

    let quote: TCQuote | undefined;

    if (Array.isArray(quoteData)) {
      const qs = quoteData as TCQuote[];

      if (!qs || !qs.length) {
        throw new Error(Errors.NO_QUOTE_TC);
      }
      quote = qs.find(q => q.pair === pair);
    } else {
      quote = quoteData as TCQuote;
    }

    if (!quote) {
      throw new Error(Errors.NO_QUOTE_TC);
    }

    return {
      quotedAt: new Date(quote.quotedAt),
      bid: quote.bid,
      ask: quote.ask,
    };
  };
}
