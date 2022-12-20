import { Document, Schema } from 'mongoose';

export interface SolarisDeviceSchema {
  owner: string;
  personId: string;
  keyType: string;
  key: string;
  name: string;
  deviceId: string;
  successfullyVerifiedAt?: Date;
}

export interface SolarisDeviceDoc extends SolarisDeviceSchema, Document {
  createdAt: Date;
  deletedAt?: Date;
  id: string;
}

export const solarisDeviceSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    personId: {
      type: String,
      required: true,
    },
    keyType: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    deviceId: {
      type: String,
      required: true,
      index: true,
    },
    successfullyVerifiedAt: {
      type: Date,
      required: false,
    },
    deletedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-devices' }
);
