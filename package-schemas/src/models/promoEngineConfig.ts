import { Currencies } from '@bitwala-cryptobank-squad/package-solaris';
import { Document, Schema } from 'mongoose';

export interface PromoEngineConfigInput {
  staticConfigName: string;
  referralBonus: number;
  referralBonusCurrency: Currencies;
  referralCondition: string;
}

export interface PromoEngineConfigDoc extends Document, PromoEngineConfigInput {
  createdAt: Date;
}

const staticConfigNameSchemaType = {
  type: String,
  required: true,
};

const referralBonusSchemaType = {
  type: Number,
  required: true,
};

const referralBonusCurrencySchemaType = {
  type: String,
  required: true,
  enum: Object.values(Currencies),
};

const referralConditionSchemaType = {
  type: String,
  required: true,
};

export const promoEngineConfigSchema: Schema = new Schema(
  {
    referralBonus: referralBonusSchemaType,
    referralBonusCurrency: referralBonusCurrencySchemaType,
    referralCondition: referralConditionSchemaType,
    staticConfigName: staticConfigNameSchemaType,
  },
  { timestamps: true, collection: 'promo-engine-config' }
);
