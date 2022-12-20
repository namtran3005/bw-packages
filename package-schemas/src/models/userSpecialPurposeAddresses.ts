import { Document, Schema } from 'mongoose';

enum WalletTypes {
  CUSTODY = 'CUSTODY',
  VAULT = 'VAULT',
}

export interface UserSpecialPurposeAddress {
  owner: string;
  purpose: string;
  address: string;
  walletType: WalletTypes;
}

export type UserSpecialPurposeAddressDoc = Document & UserSpecialPurposeAddress;

export const userSpecialPurposeAddressSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
    },
    purpose: {
      type: String,
      required: true,
      index: true,
    },
    address: {
      type: String,
      required: true,
    },
    walletType: {
      type: String,
      enum: Object.values(WalletTypes),
      required: true,
    },
  },
  { timestamps: true, collection: 'user-special-purpose-addresses' }
);
