import mongooseLeanId from 'mongoose-lean-id';
import { Document, Schema } from "mongoose";
import { mainConnection } from '../mainConnection';

export interface TransactionsEmailLogsDoc extends Document {
  id: string;
  userId: string;
  locale: string;
  firstName: string;
  solarisPersonSolarisId: string;
  solarisAccountSolarisId: string;
  email: string;
  sent: boolean;
  reason: string;
  createdAt: Date;
  updatedAt: Date;
}

export const transactionsEmailLogsSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
      unique: true
    },
    locale: {
      type: String,
    },
    firstName: {
      type: String,
    },
    solarisPersonSolarisId: {
      type: String,
      index: true,
    },
    solarisAccountSolarisId: {
      type: String,
      index: true,
    },
    email: {
      type: String,
    },
    sent: {
      type: Boolean,
    },
    reason: {
      type: String,
    }
  },
  { 
    timestamps: true,
    collection: "transactions-email-logs",
  }
);

transactionsEmailLogsSchema.plugin(mongooseLeanId);

export const TransactionsEmailLogsModel = mainConnection.db.model<TransactionsEmailLogsDoc>(
  'TransactionsEmailLogs',
  transactionsEmailLogsSchema
);
