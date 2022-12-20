import { Document, Schema } from 'mongoose';

export interface SolarisDeviceChallengeSchema {
  owner: string;
  deviceId: string;
  type: string;
  stringToSign?: string;
  challengeId: string;
  expiresAt: Date;
  successfullyVerifiedAt?: Date;
}

export interface SolarisDeviceChallengeDoc
  extends SolarisDeviceChallengeSchema,
    Document {
  id: string;
  createdAt: Date;
}

export const solarisDeviceChallengeSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    deviceId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    stringToSign: {
      type: String,
      required: false,
    },
    challengeId: {
      type: String,
      required: true,
      index: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    successfullyVerifiedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-device-challenges' }
);
