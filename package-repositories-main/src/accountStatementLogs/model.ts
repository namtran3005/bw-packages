import mongooseLeanId from 'mongoose-lean-id';
import { Document, Schema } from "mongoose";
import { mainConnection } from '../mainConnection';

export interface AccountStatementLogsDoc extends Document {
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

export const accountStatementLogsSchema: Schema = new Schema(
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
    collection: "account-statement-logs",
  }
);

accountStatementLogsSchema.plugin(mongooseLeanId);

export const AccountStatementLogsModel = mainConnection.db.model<AccountStatementLogsDoc>(
  'AccountStatementLogs',
  accountStatementLogsSchema
);
