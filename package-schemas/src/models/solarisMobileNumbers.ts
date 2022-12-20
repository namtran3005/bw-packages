import { Document, Schema } from 'mongoose';

import {
  MobileNumber,
  REGEX_PHONE_NUMBER_E164,
} from '@bitwala-cryptobank-squad/package-solaris';

export interface SolarisMobileNumberDoc extends MobileNumber, Document {
  id: string;
  owner: string;
  createdAt: Date;
  anonymisedAt?: Date;
}

export const solarisMobileNumberSchema: Schema = new Schema(
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
    number: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => REGEX_PHONE_NUMBER_E164.test(v),
      },
    },
    verified: {
      type: Boolean,
      required: true,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-mobile-numbers' }
);
