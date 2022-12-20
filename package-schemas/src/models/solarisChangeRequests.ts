import { Document, Schema } from 'mongoose';
import {
  ChangeRequestStatus,
  AuthorizationMethod,
} from '@bitwala-cryptobank-squad/package-solaris';

export enum SolarisChangeRequestReason {
  BUY_BTC = 'BUY_BTC',
  SEPA_TRANSFER = 'SEPA_TRANSFER',
  CHANGE_CARD_PIN = 'CHANGE_CARD_PIN',
  SET_PHONE_NUMBER = 'SET_PHONE_NUMBER',
  DELETE_PHONE_NUMBER = 'DELETE_PHONE_NUMBER',
  DELETE_STANDING_ORDER = 'DELETE_STANDING_ORDER',
  CONFIRM_CARD_TRANSACTION = 'CONFIRM_CARD_TRANSACTION',
  CHANGE_EMAIL_ADDRESS = 'CHANGE_EMAIL_ADDRESS',
  BUY_ETF = 'BUY_ETF',
}

export interface SolarisChangeRequest {
  userId: string;
  solarisId: string;
  usedAt?: Date;
  updatedAt?: Date;
  reason: SolarisChangeRequestReason;
  status?: ChangeRequestStatus;
  authorizationMethod?: AuthorizationMethod;
  url?: string;
  stringToSign?: string;
}

export interface SolarisChangeRequestsDoc
  extends SolarisChangeRequest,
    Document {
  id: string;
  createdAt: string;
}

export const solarisChangeRequestsSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    solarisId: {
      type: String,
      index: true,
      required: true,
    },
    usedAt: {
      type: Date,
      required: false,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
    reason: {
      type: String,
      required: true,
      enum: Object.values(SolarisChangeRequestReason),
    },
    status: {
      type: String,
      required: false,
      enum: Object.values(ChangeRequestStatus),
    },
    authorizationMethod: {
      type: String,
      required: false,
      enum: Object.values(AuthorizationMethod),
    },
    url: {
      type: String,
      required: false,
    },
    stringToSign: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-change-requests' }
);
