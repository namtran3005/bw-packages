/* eslint-disable @typescript-eslint/no-explicit-any*/

import { accountStatementRequestSchema } from '../statementsOfAccounts';
import {
  AccountStatementInterval,
  AccountStatementRequest,
} from '../../../types/entities/lib/statementsOfAccount';

const validate = (input: any) => {
  try {
    accountStatementRequestSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validInput: AccountStatementRequest = {
  year: 2012,
  interval: AccountStatementInterval.ANNUALLY,
  period: 1,
};

describe('Account statement request schema', () => {
  it('should not throw on valid input', () => {
    expect(() =>
      accountStatementRequestSchema.validateSync(validInput)
    ).not.toThrow();
  });

  it('should throw if year is omitted', () => {
    const input = {
      ...validInput,
      year: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('year');
    expect(error.type).toBe('required');
  });

  it('should throw if year is not a number', () => {
    const input = {
      ...validInput,
      year: 'whatever',
    };
    const error = validate(input);
    expect(error.path).toBe('year');
    expect(error.type).toBe('typeError');
  });

  it('should throw if year is before 1900', () => {
    const input = {
      ...validInput,
      year: 1800,
    };
    const error = validate(input);
    expect(error.path).toBe('year');
    expect(error.type).toBe('min');
  });

  it('should throw if year is not an int', () => {
    const input = {
      ...validInput,
      year: 1900.2,
    };
    const error = validate(input);
    expect(error.path).toBe('year');
    expect(error.type).toBe('integer');
  });

  it('should throw if interval is omitted', () => {
    const input = {
      ...validInput,
      interval: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('interval');
    expect(error.type).toBe('required');
  });

  it('should throw if year is not an allowed value', () => {
    const input = {
      ...validInput,
      interval: 'whatever',
    };
    const error = validate(input);
    expect(error.path).toBe('interval');
    expect(error.type).toBe('oneOf');
  });

  it('should not throw if period is omitted', () => {
    const input = {
      ...validInput,
      period: undefined,
    };
    expect(() =>
      accountStatementRequestSchema.validateSync(input)
    ).not.toThrow();
  });

  it('should throw if period is not a number', () => {
    const input = {
      ...validInput,
      period: 'whatever',
    };
    const error = validate(input);
    expect(error.path).toBe('period');
    expect(error.type).toBe('typeError');
  });

  it('should throw if period is not an integer', () => {
    const input = {
      ...validInput,
      period: 2.5,
    };
    const error = validate(input);
    expect(error.path).toBe('period');
    expect(error.type).toBe('integer');
  });

  it('should throw if period is not positive', () => {
    const input = {
      ...validInput,
      period: -6,
    };
    const error = validate(input);
    expect(error.path).toBe('period');
    expect(error.type).toBe('min');
  });
});
