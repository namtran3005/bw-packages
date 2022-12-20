import { Schema } from 'mongoose';

import { Countries } from '@bitwala-cryptobank-squad/package-solaris';

export const addressShape = {
  line1: {
    type: String,
    required: true,
    maxlength: 35,
  },
  line2: {
    type: String,
    required: false,
    maxlength: 35,
  },
  postalCode: {
    type: String,
    required: true,
    maxlength: 10,
  },
  city: {
    type: String,
    required: true,
    maxlength: 35,
  },
  country: {
    type: String,
    required: true,
    enum: Object.values(Countries),
  },
  state: {
    type: String,
    required: false,
    maxlength: 35,
  },
};

export const addressSchema: Schema = new Schema(addressShape);
