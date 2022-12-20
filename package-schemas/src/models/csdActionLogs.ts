import { Schema } from 'mongoose';

export const now = () => new Date();

export const actionLogSchema: Schema = new Schema(
  {
    action: {
      type: String,
      index: true,
    },
    payload: {
      date: {
        type: Date,
        default: now,
        index: true,
      },
      agentId: {
        type: String,
        index: 1,
      },
      ipAddress: {
        type: String,
      },
      userAgent: {
        type: String,
      },
      status: {
        type: String,
        index: 1,
      },
      errors: [Schema.Types.Mixed],
      query: Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);
