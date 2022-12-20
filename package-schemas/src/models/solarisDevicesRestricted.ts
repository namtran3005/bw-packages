import { Document, Schema } from 'mongoose';

export interface SolarisDeviceRestrictedSchema {
  owner: string;
  personId: string;
  keyType: string;
  key: string;
  name: string;
  deviceId: string;
}

export interface SolarisDeviceRestrictedDoc
  extends SolarisDeviceRestrictedSchema,
    Document {
  createdAt: Date;
  deletedAt?: Date;
  id: string;
}

export const solarisDeviceRestrictedSchema: Schema = new Schema(
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
    deletedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-devices-restricted' }
);
