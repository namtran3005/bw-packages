import { Document, Schema } from 'mongoose';

export interface SepaRecipientsDataSchema {
  owner: string;
  name: string;
  iban: string;
}

export interface SepaSavedRecipientsDoc extends Document {
  id: string;
  createdAt: Date;
  owner: string;
  name: string;
  iban: string;
}

export const sepaSavedRecipientSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    iban: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: 'sepa-saved-recipients' }
);
