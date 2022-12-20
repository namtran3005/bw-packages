import { Document, Schema } from 'mongoose';
import { numberToString } from '../utils/index';

export enum OrderStatus {
  // just created (e.g. to evaluate price), quote wasn't taken
  QUOTED = 'quoted',
  // was reserved, awaiting payment or expiration
  RESERVED = 'reserved',
  // pay-in detected (e.g. btc txn broadcast)
  PAYMENT_DETECTED = 'payment_detected',
  // btc pay-in collected 3 conf
  PAYMENT_CONFIRMED = 'payment_confirmed',
  // invalid order pay-in (under-/over- payment, expiration)
  PAYMENT_INVALID = 'payment_invalid',
  // pay-in processed, order scheduled for clearing
  CLEARING_SCHEDULED = 'clearing_scheduled',
  // error in the above stage
  SCHEDULE_CLEARING_FAILED = 'schedule_clearing_failed',
  // successfully cleared, awaiting settlement
  CLEARED = 'cleared',
  // error clearing order
  CLEARED_FAILED = 'clearing_failed',
  // successfully settled (e.g. sB confirmed with a booking)
  SETTLED = 'settled',
  // settlement failed (e.g. sB sent failure booking)
  SETTLEMENT_FAILED = 'settlement_failed',
  // was refunded to creator
  REFUNDED = 'refunded',
  // issue with refund
  REFUND_FAILED = 'refund_failed',
  // generic failure case, not used, just a fallback
  ERROR = 'error',
  // order was reserved but no pay-in was observed, so order expired and was released
  RESERVATION_EXPIRED = 'reservation_expired',
  // reserved order released
  RESERVATION_RELEASED = 'reservation_released',
  // order paid
  PAID = 'paid',
  // most likely failed or canceled sda transaction
  FAILED = 'failed',
}

export enum CryptoSettlementType {
  ON_CHAIN = 'on_chain',
  OFF_CHAIN = 'off_chain',
}

export interface Order {
  owner: string;
  orderId: string;
  bookingId?: string;
  cryptoTransactionId?: string;
  referenceId: string;
  quotedAt: Date;
  reserveBefore: Date;
  status: OrderStatus;
  expiresAt: Date;
  input: {
    currency: string;
    amount: string;
  };
  output: {
    currency: string;
    amount: string;
  };
  depositDetails: {
    clprId?: string;
    receiveAddress?: string;
    accountId?: string;
  };
  recipientDetails: {
    receiveAddress?: string;
    accountId?: string;
  };
  quote: {
    quoteId: string;
    bid: number;
    ask: number;
    pair: string;
    quotedAt: Date;
  };
  feeTier?: string;
  fees: Array<{
    type: string;
    amount: string;
    currency: string;
  }>;
  solarisChangeRequestId?: string;
  txHex?: string;
  reservedAt?: Date;
  standingOrderId?: string;
  cryptoSettlementType: CryptoSettlementType;
}

export type OrderDoc = Document &
  Order & {
    id: string;
    createdAt: Date;
  };

export const ordersMoneySchema: Schema = new Schema(
  {
    currency: {
      index: true,
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
      get: numberToString,
      set: numberToString,
    },
  },
  { _id: false }
);

export const ordersDepositDetails: Schema = new Schema(
  {
    clprId: {
      type: String,
      required: false,
    },
    receiveAddress: {
      type: String,
      required: false,
    },
    accountId: {
      type: String,
      required: false,
    },
  },
  { _id: false }
);

export const ordersRecipientDetails: Schema = new Schema(
  {
    receiveAddress: {
      type: String,
      required: false,
    },
    accountId: {
      type: String,
      required: false,
    },
  },
  { _id: false }
);

export const ordersQuoteSchema: Schema = new Schema(
  {
    quoteId: {
      type: String,
      required: true,
    },
    bid: {
      type: Number,
      required: true,
    },
    ask: {
      type: Number,
      required: true,
    },
    pair: {
      type: String,
      required: true,
    },
    quotedAt: {
      type: Date,
      required: true,
    },
  },
  { _id: false }
);

export const ordersFeeSchema: Schema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
      get: numberToString,
      set: numberToString,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

export const ordersSchema: Schema = new Schema(
  {
    owner: {
      index: true,
      type: String,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
      index: true,
    },
    bookingId: {
      type: String,
      required: false,
    },
    cryptoTransactionId: {
      type: String,
      required: false,
      index: true,
    },
    referenceId: {
      type: String,
      required: true,
      index: true,
    },
    quotedAt: {
      type: Date,
      required: true,
    },
    reserveBefore: {
      type: Date,
      required: true,
    },
    status: {
      index: true,
      type: String,
      required: true,
      enum: Object.values(OrderStatus),
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    input: {
      type: ordersMoneySchema,
      required: true,
    },
    output: {
      type: ordersMoneySchema,
      required: true,
    },
    depositDetails: {
      type: ordersDepositDetails,
      required: true,
    },
    recipientDetails: {
      type: ordersRecipientDetails,
      required: true,
    },
    quote: {
      type: ordersQuoteSchema,
      required: true,
    },
    feeTier: {
      type: String,
      required: false,
    },
    fees: {
      type: [ordersFeeSchema],
      required: true,
    },
    reservedAt: {
      type: Date,
      required: false,
    },
    /**
     * Used to store the tan change request id once the order is reserved
     * Only used when user buy crypto
     */
    solarisChangeRequestId: {
      type: String,
      required: false,
      index: true,
    },
    /**
     * Used to store the tx hex once the order is reserved
     * Only used when user sell crypto
     */
    txHex: {
      type: String,
      required: false,
    },
    /**
     * Used to store the standing order id
     * Only used when user places orders via auto buy rule
     */
    standingOrderId: {
      type: String,
      required: false,
    },
    cryptoSettlementType: {
      type: CryptoSettlementType,
      required: true,
    },
  },
  { timestamps: true, collection: 'orders' }
);

ordersSchema.index({ 'recipientDetails.receiveAddress': 1 });
