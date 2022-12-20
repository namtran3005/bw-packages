import { URLSearchParams } from 'url';

export enum Method {
  GET = 'get',
  POST = 'post',
  HEAD = 'head',
  PATCH = 'patch',
  DELETE = 'delete',
}

export interface ConstructorParams {
  baseUrl: string;
  apiVersion: string;
  apiKey: string;
}

export type Body = string | URLSearchParams | null;

export type Payload = null;

export enum Pair {
  BTCEUR = 'BTCEUR',
  ETHEUR = 'ETHEUR',
}

export const currencyMap = {
  BTC: Pair.BTCEUR,
  ETH: Pair.ETHEUR,
};

export enum Errors {
  NO_QUOTE_TC = 'NO_QUOTE_TC',
}

export interface Quote {
  quotedAt: Date;
  bid: string;
  ask: string;
}

export interface TCQuote extends Quote {
  pair: Pair;
}

export type QuoteParams = BeforeQuoteParams;
export interface BeforeQuoteParams {
  t: number;
}

export type QuoteAppendix =
  | BeforeQuoteAppendix
  | CurrentQuoteAppendix
  | SetQuoteAppendix;

export type BeforeQuoteAppendix = Pair;
export type CurrentQuoteAppendix = 'current';
export type SetQuoteAppendix = 'config';

export type GetQuoteResponse = TCQuote | TCQuote[] | undefined;
