import { Document, Schema } from 'mongoose';

import { TaxIdentification } from '@bitwala-cryptobank-squad/package-solaris';

export interface SolarisTaxIdentificationDoc
  extends Document,
    TaxIdentification {
  owner: string;
  createdAt: Date;
  anonymisedAt?: Date;
}

export const solarisTaxIdentificationSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    solarisId: {
      type: String,
      required: true,
      index: true,
    },
    country: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      index: true,
      required: false,
    },
    primary: {
      type: Boolean,
      required: true,
    },
    reasonNoTin: {
      type: String,
      required: false,
    },
    reasonDescription: {
      type: String,
      required: false,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-tax-identifications' }
);
