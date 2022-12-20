import { Document, Schema } from 'mongoose';

import {
  Identification,
  IdNowStatus,
  IdentificationMethod,
} from '@bitwala-cryptobank-squad/package-solaris';

export interface SolarisIdentificationDoc extends Identification, Document {
  owner: string;
  createdAt: Date;
}

export const solarisIdentificationSchema: Schema = new Schema(
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
    reference: {
      type: String,
      required: false,
    },
    url: {
      // TODO should be url type
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: Object.values(IdNowStatus),
      required: true,
    },
    completedAt: {
      type: Date,
      required: false,
    },
    method: {
      type: String,
      enum: Object.values(IdentificationMethod),
      required: true,
    },
    failureReason: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-identifications' }
);
