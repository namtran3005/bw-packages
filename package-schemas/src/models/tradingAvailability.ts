import { Document, Schema } from 'mongoose';

export interface TradingAvailabilityDoc extends Document {
  id: string;
  isTradingAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export const tradingAvailabilitySchema: Schema = new Schema(
  {
    isTradingAvailable: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, collection: 'trading-availability' }
);
