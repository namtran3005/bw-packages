import { Document, Schema } from 'mongoose';

export interface TradingFeeTier {
  tierId: string;
  standardTcFeeOption: string;
  savingsPlanTcFeeOption: string;
  volumeLowerBound: number;
  volumeUpperBound: number;
}

export interface TradingFeeTierDoc extends TradingFeeTier, Document {
  createdAt: Date;
  id: string;
}

export const tradingFeeTiersSchema: Schema = new Schema(
  {
    tierId: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    standardTcFeeOption: {
      type: String,
      required: true,
    },
    savingsPlanTcFeeOption: {
      type: String,
      required: true,
    },
    volumeLowerBound: {
      type: Number,
      required: true,
    },
    volumeUpperBound: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true, collection: 'trading-fee-tiers' }
);

