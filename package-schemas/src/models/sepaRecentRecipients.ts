import { Document, Schema } from 'mongoose';

export interface SepaRecentRecipientsDataSchema {
  owner: string;
  name: string;
  iban: string;
  lastTransactionAt: Date;
}

export interface SepaRecentRecipientsDoc extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  owner: string;
  name: string;
  iban: string;
  lastTransactionAt: Date;
}

export const sepaRecentRecipientSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    iban: {
      type: String,
      required: true,
    },
    lastTransactionAt: {
      type: Date,
      required: true,
      index: true,
    },
  },
  { timestamps: true, collection: 'sepa-recent-recipients' }
);

sepaRecentRecipientSchema.index(
  {
    owner: 1,
    iban: 1,
  },
  { unique: true }
);
