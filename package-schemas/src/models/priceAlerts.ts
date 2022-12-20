import { Document, Schema } from 'mongoose';

export enum TriggerType {
  BELOW = 'below',
  ABOVE = 'above',
  ANY = 'any',
}

export enum PriceAlertType {
  RELATIVE = 'relative',
  ABSOLUTE = 'absolute',
}

export enum PriceAlertTagType {
  Buy = 'Buy',
  Sell = 'Sell',
  Skipped = 'Skipped',
  Original = 'Original',
}

export enum Currency {
  ETH = 'ETH',
  BTC = 'BTC',
}

export enum PriceAlertStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  LOCKED = 'locked',
}

export interface PriceAlertHistoryEntry {
  timestamp: Date;
  notificationId?: string;
  status: PriceAlertStatus;
}

export interface ActivityInterval {
  startHour: number;
  endHour: number;
}

export interface PriceAlert {
  value: number;
  currency: Currency;
  type: PriceAlertType;
  activityInterval: ActivityInterval;
  history?: PriceAlertHistoryEntry[];
  triggerType: TriggerType;
  status: PriceAlertStatus;
  userId?: string;
  alertTag?: string;
}

export type PriceAlertsDoc = Document &
  PriceAlert & {
    id: string;
    createdAt: Date;
    deletedAt?: Date;
  };

export const intervalSchema: Schema = new Schema(
  {
    startHour: {
      type: Number,
      required: true,
    },
    endHour: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

export const historySchema: Schema = new Schema(
  {
    timestamp: {
      type: Date,
      required: true,
    },
    status: {
      type: PriceAlertStatus,
      required: true,
    },
    notificationId: {
      type: String,
    },
  },
  { _id: false }
);

export const priceAlertSchema: Schema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: Object.values(PriceAlertType),
      index: true,
    },
    value: {
      type: Number,
      required: true,
      index: true,
    },
    currency: {
      type: String,
      required: true,
      enum: Object.values(Currency),
      index: true,
    },
    triggerType: {
      type: String,
      required: true,
      enum: Object.values(TriggerType),
      index: true,
    },
    userId: {
      type: String,
    },
    deletedAt: {
      type: Date,
      default: undefined,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(PriceAlertStatus),
      index: true,
    },
    history: {
      type: [historySchema],
      default: undefined,
    },
    activityInterval: {
      type: intervalSchema,
      required: true,
    },
    alertTag: {
      type: String,
      enum: Object.values(PriceAlertTagType),
      default: PriceAlertTagType.Original,
    },
  },
  { timestamps: true, collection: 'price-alerts' }
);
