import { Document, Schema } from 'mongoose';

import {
  Person,
  ScreeningProgress,
  REGEX_NO_WHITESPACE_AT_START,
  REGEX_PHONE_NUMBER_E164,
  BusinessTradingName,
  RiskClassificationStatus,
  CustomerVettingStatus,
} from '@bitwala-cryptobank-squad/package-solaris';
import {
  Industries,
  Positions,
} from '@bitwala-cryptobank-squad/package-constants';

import { validateDateMinusOneMinute, validateSolarisDate } from '../utils';
import { addressShape } from './address';

export interface SolarisPersonMeta {
  employmentPosition: Positions;
  employmentIndustry: Industries;
}

export interface PersonInput extends Omit<Person, 'salutation'> {
  salutation: string;
}
export interface SolarisPersonDoc extends Document, PersonInput {
  owner: string;
  createdAt: Date;
  meta?: SolarisPersonMeta;
  anonymisedAt?: Date;
  businessTradingName?: BusinessTradingName;
}

export const solarisPersonAddressShape = {
  ...addressShape,
  postalCode: {
    ...addressShape.postalCode,
    required: false,
  },
};
export const solarisPersonAddressSchema: Schema = new Schema(
  solarisPersonAddressShape
);

export const solarisPersonMetaShape = {
  employmentIndustry: {
    type: String,
    enum: Object.values(Industries),
    required: false,
  },
  employmentPosition: {
    type: String,
    enum: Object.values(Positions),
    required: false,
  },
};

export const solarisPersonMetaSchema: Schema = new Schema(
  solarisPersonMetaShape,
  { _id: false }
);

export const solarisPersonSchema: Schema = new Schema(
  {
    owner: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    solarisId: {
      type: String,
      index: true,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    salutation: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      maxlength: 50,
      validate: {
        validator: (v: string) => REGEX_NO_WHITESPACE_AT_START.test(v),
      },
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 50,
      validate: {
        validator: (v: string) => REGEX_NO_WHITESPACE_AT_START.test(v),
      },
    },
    email: {
      type: String,
      index: true,
      required: true,
      maxlength: 80,
    },
    address: {
      type: solarisPersonAddressSchema,
      required: true,
    },
    employmentStatus: {
      type: String,
      required: false,
    },
    jobTitle: {
      type: String,
      required: false,
      maxlength: 100,
    },
    mobileNumber: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => REGEX_PHONE_NUMBER_E164.test(v),
      },
    },
    birthDate: {
      type: String,
      required: true,
      validate: validateSolarisDate,
    },
    birthCity: {
      type: String,
      required: true,
      maxlength: 35,
    },
    birthName: {
      type: String,
      required: false,
      maxlength: 50,
    },
    birthCountry: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    taxInformation: {
      type: {
        taxAssessment: {
          type: String,
          required: false,
        },
        maritalStatus: {
          type: String,
          required: false,
        },
      },
      required: false,
    },
    fatcaRelevant: {
      type: Boolean,
      required: true,
    },
    fatcaCrsConfirmedAt: {
      type: Date,
      required: false,
      validate: validateDateMinusOneMinute,
    },
    businessPurpose: {
      type: String,
      required: false,
      maxlength: 200,
    },
    industry: {
      type: String,
      required: false,
    },
    industryKey: {
      type: String,
      required: false,
    },
    termsConditionsSignedAt: {
      type: String,
      required: true,
    },
    meta: {
      type: solarisPersonMetaSchema,
      required: false,
    },
    screeningProgress: {
      type: String,
      enum: Object.values(ScreeningProgress),
      required: false,
    },
    anonymisedAt: {
      type: Date,
      required: false,
    },
    businessTradingName: {
      type: String,
      required: false,
    },
    riskClassificationStatus: {
      type: String,
      enum: Object.values(RiskClassificationStatus),
      required: false,
    },
    customerVettingStatus: {
      type: String,
      enum: Object.values(CustomerVettingStatus),
      required: false,
    },
  },
  { timestamps: true, collection: 'solaris-persons' }
);

solarisPersonSchema.index({ firstName: 1, lastName: 1 });
