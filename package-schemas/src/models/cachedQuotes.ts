/**
 * cache collection for the quotes that TC pushed
 */
import { Document, Schema } from 'mongoose';

export enum CurrencyPair {
  BTCEUR = 'BTCEUR',
  ETHEUR = 'ETHEUR',
}

export interface CachedQuote {
  quoteId: string;
  quotedAt: Date;
  ask: number;
  bid: number;
  pair: CurrencyPair;
}

export interface CachedQuotesDoc extends Document, CachedQuote {
  id: string;
}

export const cachedQuotesSchema: Schema = new Schema(
  {
    quoteId: { type: String, index: true, unique: true },
    /**
     * expires in ~one year
     * I am not sure if this is going to work properly
     * @todo check the index after migration happens
     */
    quotedAt: { type: Date, index: true, expires: 3.15e7 },
    ask: { type: Number },
    bid: { type: Number },
    createdAt: { type: Date, default: Date.now },
    pair: {
      type: String,
    },
  },
  { timestamps: false, collection: 'cached-quotes' }
);
