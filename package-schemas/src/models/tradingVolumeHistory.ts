import { Document, Schema } from "mongoose";

/**
 * Indicates whether this tradingVolumeHistory record
 * increased or decreased or decreased the tradingVolume
 * of the owner.
 */
 export enum TradingVolumeHistoryType {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

export interface TradingVolumeHistory {
  previousTradingVol: number;
  newTradingVol: number;
  orders: string[]; // order-ids
  owner: string;
  type: TradingVolumeHistoryType;
  // Used to determine when a history record should be used to decrease the rollingTradingVolume of the user
  insertedAt: Date;
  // Date at which this record was processed to decrease the rollingTradingVolume of the user
  processedForVolumeAt?: Date;
}

export interface TradingVolumeHistoryDoc
  extends TradingVolumeHistory,
    Document {
  createdAt: Date;
  id: string;
}

export const tradingVolumeHistorySchema: Schema = new Schema(
  {
    orders: {
      type: [String],
      required: true,
      validate: (arr: object) => Array.isArray(arr) && arr.length > 0,
    },
    owner: {
      type: String,
      required: true,
      index: true,
    },
    newTradingVol: {
      type: Number,
      required: true,
    },
    previousTradingVol: {
      type: Number,
      required: true,
    },
    insertedAt: {
      type: Date,
      required: true,
      index: true,
    },
    processedForVolumeAt: {
      type: Date,
      index: true,
    },
    type: {
      type: String,
      enum: Object.values(TradingVolumeHistoryType),
      required: true,
    }
  },
  { timestamps: true, collection: "trading-volume-history" }
);

tradingVolumeHistorySchema.index({ createdAt: 1 });
tradingVolumeHistorySchema.index({ orders: 1, type: 1}, { unique: true });
