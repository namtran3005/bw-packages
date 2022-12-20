/* eslint-disable @typescript-eslint/no-explicit-any*/

import { moneyAmountSchema } from '../money';
import { MoneyUnit } from '../../../types/misc/lib/money';
import { Currencies } from '../../../types/misc/lib/currencies';

const validate = (input: any) => {
  try {
    moneyAmountSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validInput = {
  value: 5000,
  currency: Currencies.EUR,
  unit: MoneyUnit.CENTS,
};

describe('Money amount schema', () => {
  it('should not throw on valid input', () => {
    expect(() => moneyAmountSchema.validateSync(validInput)).not.toThrow();
  });

  it('should throw if value is omitted', () => {
    const input = { ...validInput, value: undefined };
    const error = validate(input);
    expect(error.path).toBe('value');
    expect(error.type).toBe('required');
  });

  it('should throw if value is not a number', () => {
    const input = { ...validInput, value: 'random' };
    const error = validate(input);
    expect(error.path).toBe('value');
    expect(error.type).toBe('typeError');
  });

  it('should throw if value is not a positive number', () => {
    const input = { ...validInput, value: -100 };
    const error = validate(input);
    expect(error.path).toBe('value');
    expect(error.type).toBe('min');
  });

  it('should throw if value is not an integer', () => {
    const input = { ...validInput, value: 100.2 };
    const error = validate(input);
    expect(error.path).toBe('value');
    expect(error.type).toBe('integer');
  });

  it('should throw if currency is omitted', () => {
    const input = { ...validInput, currency: undefined };
    const error = validate(input);
    expect(error.path).toBe('currency');
    expect(error.type).toBe('required');
  });

  it('should throw if currency is not an allowed value', () => {
    const input = { ...validInput, currency: 'random' };
    const error = validate(input);
    expect(error.path).toBe('currency');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if unit is omitted', () => {
    const input = { ...validInput, unit: undefined };
    const error = validate(input);
    expect(error.path).toBe('unit');
    expect(error.type).toBe('required');
  });

  it('should throw if unit is not an allowed value', () => {
    const input = { ...validInput, unit: 'random' };
    const error = validate(input);
    expect(error.path).toBe('unit');
    expect(error.type).toBe('oneOf');
  });
});
