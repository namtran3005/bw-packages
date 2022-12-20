/* eslint-disable @typescript-eslint/no-explicit-any*/

import * as yup from 'yup';
import {
  personInputSchema,
  personAddressSchema,
  personTaxInformationSchema,
} from '../persons';
import {
  Salutation,
  EmploymentStatus,
} from '../../../types/entities/lib/persons';
import { Countries } from '../../../types/misc/lib/countries';

const validInput = {
  salutation: Salutation.MR,
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  address: {
    line1: 'Some str. 1',
    postalCode: '12345',
    city: 'Arkham',
    country: Countries.US,
  },
  employmentStatus: EmploymentStatus.EMPLOYED,
  mobileNumber: '+1234567',
  birthDate: '1900-01-01',
  birthCountry: Countries.US,
  birthCity: 'Arkham',
  nationality: Countries.US,
  termsConditionsSignedAt: '2017-01-01',
  fatcaRelevant: false,
};

const validate = (schema: yup.MixedSchema) => (input: any) => {
  try {
    schema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validatePerson = validate(personInputSchema);
const validateAddress = validate(personAddressSchema);
const validateTaxInformation = validate(personTaxInformationSchema);

describe('Person address schema', () => {
  it('should not throw on valid input', () => {
    expect(() =>
      personAddressSchema.validateSync(validInput.address)
    ).not.toThrow();
  });

  it('should throw if line1 is not provided', () => {
    const input = { ...validInput.address, line1: undefined };
    const error = validateAddress(input);
    expect(error.path).toBe('line1');
    expect(error.type).toBe('required');
  });

  it('should throw if line1 exceeds 35 chars', () => {
    const input = { ...validInput.address, line1: ''.padStart(40, 'x') };
    const error = validateAddress(input);
    expect(error.path).toBe('line1');
    expect(error.type).toBe('max');
  });

  it('should not throw if line2 is not provided', () => {
    const input = { ...validInput.address, line2: undefined };
    const error = validateAddress(input);
    expect(error.message).toBe('Test wrong');
  });

  it('should throw if line2 provided and exceeds 35 chars', () => {
    const input = { ...validInput.address, line2: ''.padStart(40, 'x') };
    const error = validateAddress(input);
    expect(error.path).toBe('line2');
    expect(error.type).toBe('max');
  });
  it('should throw if line1 + line2 exceeds 40 chars', () => {
    const input = {
      ...validInput.address,
      line1: ''.padStart(20, 'x'),
      line2: ''.padStart(30, 'x'),
    };
    const error = validateAddress(input);
    expect(error.path).toBe('line2');
    expect(error.type).toBe('max');
  });

  it('should throw if postalCode is not provided', () => {
    const input = { ...validInput.address, postalCode: undefined };
    const error = validateAddress(input);
    expect(error.path).toBe('postalCode');
    expect(error.type).toBe('required');
  });

  it('should throw if postalCode exceeds 10 chars', () => {
    const input = { ...validInput.address, postalCode: ''.padStart(20, 'x') };
    const error = validateAddress(input);
    expect(error.path).toBe('postalCode');
    expect(error.type).toBe('max');
  });

  it('should throw if city is not provided', () => {
    const input = { ...validInput.address, city: undefined };
    const error = validateAddress(input);
    expect(error.path).toBe('city');
    expect(error.type).toBe('required');
  });

  it('should throw if city exceeds 35 chars', () => {
    const input = { ...validInput.address, city: ''.padStart(40, 'x') };
    const error = validateAddress(input);
    expect(error.path).toBe('city');
    expect(error.type).toBe('max');
  });

  it('should throw if country is not provided', () => {
    const input = { ...validInput.address, country: undefined };
    const error = validateAddress(input);
    expect(error.path).toBe('country');
    expect(error.type).toBe('required');
  });

  it('should throw if country is not an allowed value', () => {
    const input = { ...validInput.address, country: 'random' };
    const error = validateAddress(input);
    expect(error.path).toBe('country');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if state is not a german state code when country is DE', () => {
    const input = {
      ...validInput.address,
      country: Countries.DE,
      state: 'random',
    };
    const error = validateAddress(input);
    expect(error.path).toBe('state');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if state is not a german state code, country is not DE and state exceeds 35 chars', () => {
    const input = {
      ...validInput.address,
      country: Countries.US,
      state: ''.padStart(40, 'x'),
    };
    const error = validateAddress(input);
    expect(error.path).toBe('state');
    expect(error.type).toBe('max');
  });
});

describe('Person tax information schema', () => {
  it('should not throw when both fields are omitted', () => {
    expect(() => validateTaxInformation({})).not.toThrow();
  });
  it('should throw if tax assessment is provided but is not an allowed value', () => {
    const input = { taxAssessment: 'random' };
    const error = validateTaxInformation(input);
    expect(error.path).toBe('taxAssessment');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if marital status is provided but is not an allowed value', () => {
    const input = { maritalStatus: 'random' };
    const error = validateTaxInformation(input);
    expect(error.path).toBe('maritalStatus');
    expect(error.type).toBe('oneOf');
  });
});

describe('Person input schema', () => {
  it('should not throw on valid input', () => {
    expect(() => personInputSchema.validateSync(validInput)).not.toThrow();
  });
  it('should throw if salutation is not an allowed value', () => {
    const input = { ...validInput, salutation: 'RANDOM' };
    const error = validatePerson(input);
    expect(error.path).toBe('salutation');
    expect(error.type).toBe('oneOf');
  });
  it('should throw if first name is not provided', () => {
    const input = { ...validInput, firstName: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('firstName');
    expect(error.type).toBe('required');
  });
  it('should throw if last name is not provided', () => {
    const input = { ...validInput, lastName: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('lastName');
    expect(error.type).toBe('required');
  });

  it('should throw if first name exceeds 50 chars', () => {
    const input = { ...validInput, firstName: ''.padStart(60, 'x') };
    const error = validatePerson(input);
    expect(error.path).toBe('firstName');
    expect(error.type).toBe('max');
  });
  it('should throw if last name exceeds 50 chars', () => {
    const input = { ...validInput, lastName: ''.padStart(60, 'x') };
    const error = validatePerson(input);
    expect(error.path).toBe('lastName');
    expect(error.type).toBe('max');
  });
  it('should throw if first name + last name exceeds 40 chars', () => {
    const input = {
      ...validInput,
      firstName: ''.padStart(20, 'x'),
      lastName: ''.padStart(30, 'x'),
    };
    const error = validatePerson(input);
    expect(error.path).toBe('lastName');
    expect(error.type).toBe('max');
  });

  it('should throw if email is not provided', () => {
    const input = { ...validInput, email: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('email');
    expect(error.type).toBe('required');
  });

  it('should throw if email is not valid - 1', () => {
    const input = { ...validInput, email: 'random' };
    const error = validatePerson(input);
    expect(error.path).toBe('email');
    expect(error.message).toBe('Email must be a valid email');
  });

  it('should throw if mobile number is not provided', () => {
    const input = { ...validInput, mobileNumber: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('mobileNumber');
    expect(error.type).toBe('required');
  });

  it('should throw if email is not valid - 2', () => {
    const input = { ...validInput, mobileNumber: 'random' };
    const error = validatePerson(input);
    expect(error.path).toBe('mobileNumber');
    expect(error.message).toBe(
      'Mobile number should be a valid phone number, starting with +'
    );
  });

  it('should throw if birth date is not provided', () => {
    const input = { ...validInput, birthDate: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('birthDate');
    expect(error.type).toBe('required');
  });

  it('should throw if birth date is not in valid format', () => {
    const input = { ...validInput, birthDate: 'random' };
    const error = validatePerson(input);
    expect(error.path).toBe('birthDate');
    expect(error.message).toBe(
      'Birth date should be a valid date in YYYY-MM-DD format'
    );
  });

  it('should throw if birth city is not provided', () => {
    const input = { ...validInput, birthCity: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('birthCity');
    expect(error.type).toBe('required');
  });

  it('should throw if birth city exceeds 35 chars', () => {
    const input = { ...validInput, birthCity: ''.padStart(40, 'x') };
    const error = validatePerson(input);
    expect(error.path).toBe('birthCity');
    expect(error.type).toBe('max');
  });

  it('should throw if birth country is not provided', () => {
    const input = { ...validInput, birthCountry: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('birthCountry');
    expect(error.type).toBe('required');
  });

  it('should throw if birth country is not a country code', () => {
    const input = { ...validInput, birthCountry: 'random' };
    const error = validatePerson(input);
    expect(error.path).toBe('birthCountry');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if nationality is not provided', () => {
    const input = { ...validInput, nationality: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('nationality');
    expect(error.type).toBe('required');
  });

  it('should throw if nationality is not a country code', () => {
    const input = { ...validInput, nationality: 'random' };
    const error = validatePerson(input);
    expect(error.path).toBe('nationality');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if fatcaRelevant is not a boolean', () => {
    const input = { ...validInput, fatcaRelevant: 'random' };
    const error = validatePerson(input);
    expect(error.path).toBe('fatcaRelevant');
    expect(error.type).toBe('typeError');
  });

  it('should throw if businessPurpose exceeds 200 chars', () => {
    const input = { ...validInput, businessPurpose: ''.padStart(201, 'x') };
    const error = validatePerson(input);
    expect(error.path).toBe('businessPurpose');
    expect(error.type).toBe('max');
  });

  it('should throw if industry is not an allowed value', () => {
    const input = { ...validInput, industry: 'random' };
    const error = validatePerson(input);
    expect(error.path).toBe('industry');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if industryKey is not an allowed value', () => {
    const input = { ...validInput, industryKey: 'random' };
    const error = validatePerson(input);
    expect(error.path).toBe('industryKey');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if termsConditionsSignedAt is not provided', () => {
    const input = { ...validInput, termsConditionsSignedAt: undefined };
    const error = validatePerson(input);
    expect(error.path).toBe('termsConditionsSignedAt');
    expect(error.type).toBe('required');
  });

  it('should throw if termsConditionsSignedAt is not in the past', () => {
    const input = { ...validInput, termsConditionsSignedAt: '2155-01-01' };
    const error = validatePerson(input);
    expect(error.path).toBe('termsConditionsSignedAt');
    expect(error.type).toBe('isPastDate');
  });
});
