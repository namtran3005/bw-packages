import { Document, Schema } from 'mongoose';

export interface SdaAddress {
  owner: string;
  solarisId: string;
  address: string;
  accountId: string;
}

export interface SdaAddressDoc extends SdaAddress, Document {
  createdAt: Date;
  deletedAt?: Date;
}

export const sdaAddressSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    solarisId: {
      type: String,
      index: true,
      required: true,
    },
    address: {
      type: String,
      index: true,
      required: true,
    },
    accountId: {
      type: String,
      required: true,
      index: true,
    },
    deletedAt: {
      type: Date,
      required: false,
      index: true,
    },
  },
  { timestamps: true, collection: 'sda-addresses' }
);

sdaAddressSchema.index({ createdAt: 1 });
