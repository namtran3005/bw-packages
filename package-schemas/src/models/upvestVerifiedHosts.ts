import { Document, Schema } from 'mongoose';

/**
 * Before using Upvest webhooks, server host should be verified.
 * This schema store if server host was verified.
 */

export interface UpvestVerifiedHost {
  host: string;
  isVerified: boolean;
}

export type UpvestVerifiedHostDoc = Document & UpvestVerifiedHost;

export const upvestVerifiedHostSchema: Schema = new Schema(
  {
    host: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, collection: 'upvest-verified-hosts' }
);
