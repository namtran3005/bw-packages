/**
 * cache collection for the quotes that TC pushed.
 * Doesn't keep historical data, keeps just the most recent values for fast querying
 */
import { Document, Schema } from 'mongoose';

enum CurrencyPair {
  BTCEUR = 'BTCEUR',
  ETHEUR = 'ETHEUR',
}

export interface CurrentQuote {
  quoteId: string;
  quotedAt: Date;
  ask: number;
  bid: number;
  pair: CurrencyPair;
}

export interface CurrentQuotesDoc extends Document, CurrentQuote {
  id: string;
}

export const currentQuotesSchema: Schema = new Schema(
  {
    quoteId: { type: String },
    quotedAt: { type: Date },
    ask: { type: Number },
    bid: { type: Number },
    createdAt: { type: Date, default: Date.now },
    pair: {
      type: String,
      unique: true,
    },
  },
  { timestamps: false, collection: 'current-quotes' }
);
