import { Document, Schema } from 'mongoose';

export enum ChallengeResponsePurpose {
  BTC_SEND = 'BTC_SEND',
  BTC_SELL = 'BTC_SELL',
  BTC_BUY = 'BTC_BUY',
  ETH_SEND = 'ETH_SEND',
  ETH_SELL = 'ETH_SELL',
  ETH_BUY = 'ETH_BUY',
  SDA_BTC_SEND = 'SDA_BTC_SEND',
  SDA_ETH_SEND = 'SDA_ETH_SEND',
  SDA_BTC_SELL = 'SDA_BTC_SELL',
  SDA_ETH_SELL = 'SDA_ETH_SELL',
  SDA_BTC_INTEREST = 'SDA_BTC_INTEREST',
  LOGIN = 'LOGIN',
}

export enum ChallengeResponseStatus {
  INITIATED = 'INITIATED',
  NOT_VERIFIED = 'NOT_VERIFIED',
  COMPLETED = 'COMPLETED',
}

export interface ChallengeResponseAuditSchema {
  owner: string;
  deviceId: string;
  ipAddress: string;
  viewerCountry: string;
  userAgent: string;
  challenge: string;
  signature?: string;
  transactionId?: string;
  purpose: ChallengeResponsePurpose;
  status: ChallengeResponseStatus;
}

export interface ChallengeResponseAuditDoc
  extends ChallengeResponseAuditSchema,
    Document {
  id: string;
  createdAt: Date;
  anonymisedAt?: Date;
}

export const challengeResponseAuditSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    deviceId: {
      type: String,
      required: true,
      index: true,
    },
    ipAddress: {
      type: String,
      required: true,
    },
    viewerCountry: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    challenge: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      required: [
        function(this: ChallengeResponseAuditDoc) {
          return this.status !== ChallengeResponseStatus.INITIATED;
        },
        'Signature required',
      ],
    },
    transactionId: {
      type: String,
      required: [
        function(this: ChallengeResponseAuditDoc) {
          return (
            [
              ChallengeResponsePurpose.BTC_BUY,
              ChallengeResponsePurpose.BTC_SELL,
              ChallengeResponsePurpose.BTC_SEND,
              ChallengeResponsePurpose.ETH_BUY,
              ChallengeResponsePurpose.ETH_SELL,
              ChallengeResponsePurpose.ETH_SEND,
            ].includes(this.purpose) &&
            this.status === ChallengeResponseStatus.COMPLETED
          );
        },
        'Transaction id is required',
      ],
    },
    purpose: {
      type: String,
      enum: Object.values(ChallengeResponsePurpose),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(ChallengeResponseStatus),
      required: true,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'challenge-response-audit' }
);
