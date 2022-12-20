import * as yup from 'yup';

import {
  Title,
  Salutation,
  PersonInput,
  EmploymentStatus,
  PersonTaxInformation,
  TaxAssessment,
  MaritalStatus,
} from '../../types/entities/lib/persons';
import { Industry, IndustryKey } from '../../types/entities/lib/businesses';
import { Countries } from '../../types/misc/lib/countries';
import { GermanStateCodes } from '../../types/misc/lib/germanStateCodes';
import { SchemaSpec } from '../../types/misc/lib/schemas';
import { Address } from '../../types/misc/lib/address';
import { dateRegex, isPastDate } from '../dates';
import {
  REGEX_NAME_CHARS,
  REGEX_ADDRESS_FULL,
  REGEX_PHONE_NUMBER_E164,
} from '../regex';

export const personConstants = {
  firstName: {
    maxLength: 50,
  },
  lastName: {
    maxLength: 50,
  },
  jobTitle: {
    maxLength: 100,
  },
  address: {
    line1: {
      maxLength: 35,
    },
    line2: {
      maxLength: 35,
    },
    postalCode: {
      maxLength: 10,
    },
    city: {
      maxLength: 35,
    },
  },
};

export const personAddressShape: SchemaSpec<Address> = {
  line1: yup
    .string()
    .label('Address line 1')
    .max(35)
    .matches(REGEX_ADDRESS_FULL, 'Special characters not allowed')
    .required(),
  line2: yup
    .string()
    .label('Address line 2')
    .max(35)
    .notRequired()
    .matches(REGEX_ADDRESS_FULL, 'Special characters not allowed')
    .when('line1', (line1: string | null, schema: yup.StringSchema) => {
      return line1 ? schema.max(39 - line1.length) : schema.max(35);
    })
    .notRequired(),
  postalCode: yup
    .string()
    .label('Postal code')
    .max(10)
    .matches(REGEX_ADDRESS_FULL, 'Special characters not allowed')
    .required(),
  city: yup
    .string()
    .label('City')
    .max(35)
    .matches(REGEX_ADDRESS_FULL, 'Special characters not allowed')
    .required(),
  country: yup
    .string()
    .label('Country')
    .oneOf(Object.values(Countries))
    .required() as yup.MixedSchema<Countries>,
  state: yup
    .string()
    .label('State')
    .when('country', {
      is: Countries.DE,
      then: yup
        .string()
        .oneOf(Object.values(GermanStateCodes))
        .notRequired() as yup.Schema<GermanStateCodes>,
      otherwise: yup.string().max(35).notRequired() as yup.Schema<string>,
    }),
};

export const personAddressSchema = yup
  .object<Address>()
  .shape(personAddressShape);

export const personTaxInformationShape: SchemaSpec<PersonTaxInformation> = {
  taxAssessment: yup
    .string()
    .label('Tax assessment')
    .oneOf(Object.values(TaxAssessment))
    .notRequired() as yup.MixedSchema<TaxAssessment>,
  maritalStatus: yup
    .string()
    .label('Marital status')
    .oneOf(Object.values(MaritalStatus))
    .notRequired() as yup.MixedSchema<MaritalStatus>,
};

export const personTaxInformationSchema = yup
  .object<PersonTaxInformation>()
  .shape(personTaxInformationShape);

export const personInputShape: SchemaSpec<PersonInput> = {
  title: yup
    .string()
    .label('Title')
    .oneOf(Object.values(Title))
    .notRequired() as yup.MixedSchema<Title>,
  salutation: yup
    .string()
    .label('Salutation')
    .oneOf(Object.values(Salutation))
    .notRequired() as yup.MixedSchema<Salutation>,
  firstName: yup
    .string()
    .label('First name')
    .max(50)
    .matches(REGEX_NAME_CHARS)
    .required()
    .trim(),
  lastName: yup
    .string()
    .label('Last name')
    .max(50)
    .matches(REGEX_NAME_CHARS)
    .trim()
    .when('firstName', (firstName: string | null, schema: yup.StringSchema) => {
      return firstName ? schema.max(39 - firstName.length) : schema.max(40);
    })
    .required(),
  address: personAddressSchema.required(),
  contactAddress: personAddressSchema.notRequired().default(undefined),
  employmentStatus: yup
    .string()
    .label('Employment status')
    .nullable(true)
    .oneOf(Object.values(EmploymentStatus))
    .notRequired() as yup.MixedSchema<EmploymentStatus>,
  jobTitle: yup.string().label('Job title').max(100).notRequired(),
  email: yup.string().label('Email').email().required().max(80),
  mobileNumber: yup
    .string()
    .label('Mobile number')
    .matches(
      REGEX_PHONE_NUMBER_E164,
      'Mobile number should be a valid phone number, starting with +'
    )
    .required(),
  birthName: yup.string().label('Birth name').max(50).notRequired(),
  birthDate: yup
    .string()
    .label('Birth date')
    .matches(
      dateRegex,
      'Birth date should be a valid date in YYYY-MM-DD format'
    )
    .required()
    .test('isPastDate', '${path} should be in the past', isPastDate),
  birthCity: yup
    .string()
    .label('Birth city')
    .matches(REGEX_NAME_CHARS, 'Birth city must not contain special characters')
    .max(35)
    .required(),
  birthCountry: yup
    .string()
    .label('Birth country')
    .oneOf(Object.values(Countries))
    .required() as yup.MixedSchema<Countries>,
  nationality: yup
    .string()
    .label('Nationality')
    .oneOf(Object.values(Countries))
    .required() as yup.MixedSchema<Countries>,
  taxInformation: personTaxInformationSchema.notRequired(),
  fatcaRelevant: yup.bool().label('FATCA relevant').required(),
  fatcaCrsConfirmedAt: yup
    .string()
    .label('FATCA CRS confirmed at')
    .test(
      'isFormattedDate',
      '${path} should be a valid date in YYYY-MM-DD format',
      (v) => (!v ? true : dateRegex.test(v))
    )
    .notRequired(),
  businessPurpose: yup
    .string()
    .label('Business purpose')
    .max(200)
    .notRequired(),
  industry: yup
    .string()
    .label('Industry')
    .oneOf(Object.values(Industry))
    .notRequired() as yup.MixedSchema<Industry>,
  industryKey: yup
    .string()
    .label('Industry key')
    .oneOf(Object.values(IndustryKey))
    .notRequired() as yup.MixedSchema<IndustryKey>,
  termsConditionsSignedAt: yup
    .string()
    .required()
    .test('isPastDate', '${path} should be in the past', isPastDate),
};

export const personInputSchema = yup
  .object<PersonInput>()
  .shape(personInputShape);
