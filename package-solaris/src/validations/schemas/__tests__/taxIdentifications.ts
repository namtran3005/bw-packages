/* eslint-disable @typescript-eslint/no-explicit-any*/

import { taxIdentificationInputSchema } from '../taxIdentifications';
import { Countries } from '../../../types/misc/lib/countries';
import {
  NoTinReasons,
  TaxIdentificationInput,
} from '../../../types/entities/lib/taxIdentifications';

const validate = (input: any) => {
  try {
    taxIdentificationInputSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validInput: TaxIdentificationInput = {
  country: Countries.DE,
  number: '123456',
  primary: true,
};

describe('Tax identification input schema', () => {
  it('should not throw on valid input', () => {
    expect(() =>
      taxIdentificationInputSchema.validateSync(validInput)
    ).not.toThrow();
  });

  it('should throw if country is omitted', () => {
    const input = {
      ...validInput,
      country: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('country');
    expect(error.type).toBe('required');
  });

  it('should throw if country is not an allowed value', () => {
    const input = {
      ...validInput,
      country: 'whatever',
    };
    const error = validate(input);
    expect(error.path).toBe('country');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if primary is omitted', () => {
    const input = {
      ...validInput,
      primary: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('primary');
    expect(error.type).toBe('required');
  });

  it('should throw if number is omitted and no reason specified', () => {
    const input = {
      ...validInput,
      number: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('reasonNoTin');
    expect(error.type).toBe('required');
  });

  it('should throw if reason is not an allowed value', () => {
    const input = {
      ...validInput,
      number: undefined,
      reasonNoTin: 'whatever',
    };
    const error = validate(input);
    expect(error.path).toBe('reasonNoTin');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if number is omitted, reason is OTHER and no description specified', () => {
    const input = {
      ...validInput,
      number: undefined,
      reasonNoTin: NoTinReasons.OTHER,
    };
    const error = validate(input);
    expect(error.path).toBe('reasonDescription');
    expect(error.type).toBe('required');
  });
});
