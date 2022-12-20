import { Document, Schema } from 'mongoose';

export enum DevicePairingStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface WalletsOnDevice {
  walletAddress: string;
  coin: string;
}

export interface UserDevicePairDataSchema {
  owner: string;
  deviceId: string;
  keySignature: string;
  publicKey: string;
  walletsOnDevice?: WalletsOnDevice[];
  deviceModel: string;
  platformVersion: string;
  appVersion: string;
  status?: DevicePairingStatus;
  zendeskTicketNumber?: string;
  anonymisedAt?: Date;
}

export interface UserDevicePairDoc extends UserDevicePairDataSchema, Document {
  id: string;
}

export const walletOnDeviceSchema: Schema = new Schema(
  {
    walletAddress: {
      type: String,
      required: true,
    },
    coin: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

export const userDevicePairsSchema: Schema = new Schema(
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
    keySignature: {
      type: String,
      required: true,
    },
    publicKey: {
      type: String,
      required: true,
    },
    walletsOnDevice: [walletOnDeviceSchema],
    deviceModel: {
      type: String,
      required: true,
    },
    platformVersion: {
      type: String,
      required: true,
    },
    appVersion: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(DevicePairingStatus),
      required: true,
      default: DevicePairingStatus.ACTIVE,
    },
    zendeskTicketNumber: {
      type: String,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'user-device-pairs' }
);
