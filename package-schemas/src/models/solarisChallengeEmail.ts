import { Document, Schema } from 'mongoose';

export interface SolarisChallengeEmailDoc extends Document {
  id: string;
  userId: string;
  requestId: string;
  currentEmail?: string;
  newEmail?: string;
  finishedAt?: Date;
}

export const solarisChallengeEmailSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    requestId: {
      type: String,
      required: true,
    },
    currentEmail: {
      type: String,
      required: false,
    },
    newEmail: {
      type: String,
      required: false,
    },

    finishedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-challenge-email' }
);
