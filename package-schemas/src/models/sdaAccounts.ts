import { Document, Schema } from 'mongoose';
import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';

export interface SdaAccount {
  owner: string;
  solarisId: string;
  currency: Currencies.BTC | Currencies.ETH;
  entityId: string;
  balance: string;
  availableBalance: string;
}

export interface SdaAccountDoc extends SdaAccount, Document {
  createdAt: Date;
  id: string;
}

export const sdaAccountSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    solarisId: {
      type: String,
      index: true,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    entityId: {
      type: String,
      required: true,
      index: true,
    },
    balance: {
      type: String,
      required: true,
    },
    availableBalance: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: 'sda-accounts' }
);
