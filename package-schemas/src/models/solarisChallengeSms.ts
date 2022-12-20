import { Document, Schema } from 'mongoose';

export interface SolarisChallengeSmsDoc extends Document {
  id: string;
  /**
   * User id linked to this sms challenge
   */
  userId: string;
  /**
   * Solaris id of the sms challenge
   */
  solarisId: string;
  /**
   * When did the user requested the challenge
   */
  requestedAt: Date;
  /**
   * When did the user used the challenge successfully
   */
  usedAt?: Date;
}

export const solarisChallengeSmsSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    solarisId: {
      type: String,
      index: true,
      required: true,
    },
    requestedAt: {
      type: Date,
      required: true,
    },
    usedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-challenge-sms' }
);
