import { Schema } from 'mongoose';

export const solarisCardRepresentationSchema: Schema = new Schema(
  {
    maskedPan: {
      type: String,
      required: false,
    },
    line1: {
      type: String,
      required: false,
    },
    formattedExpirationDate: {
      type: String,
      required: false,
    },
  },
  { _id: false }
);
