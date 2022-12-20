import { Document, Schema } from 'mongoose';

export interface TermsAndConditionsDoc extends Document {
  owner: string;
  event: TermsAndConditionsEventType;
  documentId: string;
}
export enum TermsAndConditionsEventType {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}
export const termsAndConditionsSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    event: {
      type: TermsAndConditionsEventType,
      required: true,
    },
    documentId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'terms-and-conditions-logs',
  }
);
