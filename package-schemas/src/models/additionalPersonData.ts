import { Document, Schema } from 'mongoose';

import { Countries } from '@bitwala-cryptobank-squad/package-solaris';

export enum SourceOfIncome {
  SALARY = 'SALARY',
  PENSION = 'PENSION',
  CAPITAL_INCOME = 'CAPITAL_INCOME',
  RENTAL_INCOME = 'RENTAL_INCOME',
  LOANS = 'LOANS',
  INSURANCE_CLAIMS = 'INSURANCE_CLAIMS',
  DIVORCE = 'DIVORCE',
  LOTTERY = 'LOTTERY',
  SAVINGS = 'SAVINGS',
  HERITAGE = 'HERITAGE',
  GIFT = 'GIFT',
  INVESTMENTS = 'INVESTMENTS',
  LIFE_INSURANCE = 'LIFE_INSURANCE',
  COMPANIES = 'COMPANIES',
  JUDEGEMENTS = 'JUDEGEMENTS',
  CRYPTO = 'CRYPTO',
}

export interface AdditionalPersonDataInput {
  etfTaxNumber?: string;
  etfTaxCountry?: Countries;
  taxNumber?: string;
  taxCountry?: Countries;
  sourceOfIncome?: SourceOfIncome;
  isChurchMember?: boolean;
  bvdhTermsAndConditionsSignedAt?: Date;
  nuriEtfTermsAndConditionsSignedAt?: Date;
  nuriDefiTermsAndConditionsSignedAt?: Date;
}

export interface AdditionalPersonDataDoc
  extends Document,
    AdditionalPersonDataInput {
  userId: string;
}

export const additionalPersonDataShape = {
  userId: {
    type: String,
    index: true,
    required: true,
  },
  etfTaxNumber: String,
  etfTaxCountry: { type: String, enum: Object.values(Countries) },
  taxNumber: String,
  taxCountry: { type: String, enum: Object.values(Countries) },
  sourceOfIncome: { type: String, enum: Object.values(SourceOfIncome) },
  isChurchMember: Boolean,
  bvdhTermsAndConditionsSignedAt: Date,
  nuriEtfTermsAndConditionsSignedAt: Date,
  nuriDefiTermsAndConditionsSignedAt: Date,
};

export const additionalPersonDataSchema: Schema = new Schema(
  additionalPersonDataShape,
  { timestamps: true, collection: 'additional-person-data' }
);
