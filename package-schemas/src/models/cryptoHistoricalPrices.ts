import { Document, Schema } from 'mongoose';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';

export interface HistoricalPricesDataPoint {
  t: Date;
  p: number;
}

export interface HistoricalPricesEntry {
  currency: Currencies.BTC | Currencies.ETH;
  date: Date;
  data: HistoricalPricesDataPoint[];
}

export interface HistoricalPricesDoc extends HistoricalPricesEntry, Document {}

export const historicalPricesDataPointSchema: Schema = new Schema(
  {
    t: {
      type: Date,
      required: true,
    },
    p: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

export const historicalPricesSchema: Schema = new Schema(
  {
    currency: {
      type: String,
      required: true,
      index: true,
      enum: [Currencies.BTC, Currencies.ETH],
    },
    date: {
      type: Date,
      required: true,
      index: true,
    },
    data: {
      type: [historicalPricesDataPointSchema],
      required: true,
    },
  },
  { collection: 'crypto-historical-prices', timestamps: true }
);
