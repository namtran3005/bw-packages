import { Quote } from '../types';

export const calcMidpoint = ({ bid, ask }: Quote) =>
  Number(((Number(bid) + Number(ask)) / 2).toFixed(2));

export const getNow = () => new Date().getTime();

export const checkForStaleQuote = (quote: Quote, quoteLifetime: number) =>
  getNow() - new Date(quote.quotedAt).getTime() > quoteLifetime;
