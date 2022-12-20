/* eslint-disable @typescript-eslint/no-explicit-any*/

import { standingOrderInputSchema } from '../standingOrders';
import { MoneyUnit } from '../../../types/misc/lib/money';
import { Currencies } from '../../../types/misc/lib/currencies';
import {
  StandingOrderInput,
  Reoccurrence,
} from '../../../types/entities/lib/standingOrders';

const validate = (input: any) => {
  try {
    standingOrderInputSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validInput: StandingOrderInput = {
  description: 'bar',
  reference: 'foo',
  amount: {
    value: 1000,
    currency: Currencies.EUR,
    unit: MoneyUnit.CENTS,
  },
  recipientName: 'name',
  recipientIban: 'DE89370400440532013000',
  recipientBic: 'AACHDE31XXX',
  endToEndId: 'id',
  monthEndExecution: true,
  reoccurrence: Reoccurrence.ANNUALLY,
  firstExecutionDate: '2018-09-09',
  lastExecutionDate: '2019-09-09',
};

describe('Standing order input schema', () => {
  it('should not throw on valid input', () => {
    expect(() =>
      standingOrderInputSchema.validateSync(validInput)
    ).not.toThrow();
  });

  it('should not throw if monthEndExecution is omitted', () => {
    const input = {
      ...validInput,
      monthEndExecution: undefined,
    };
    expect(() =>
      standingOrderInputSchema.validateSync(input as any)
    ).not.toThrow();
  });

  it('should not throw if bic is omitted', () => {
    const input = { ...validInput, recipientBic: undefined };
    expect(() =>
      standingOrderInputSchema.validateSync(input as any)
    ).not.toThrow();
  });

  it('should throw if monthEndExecution is not a bool', () => {
    const input = {
      ...validInput,
      monthEndExecution: 'random',
    };
    const error = validate(input);
    expect(error.path).toBe('monthEndExecution');
    expect(error.type).toBe('typeError');
  });

  it('should throw if reoccurrence is omitted', () => {
    const input = {
      ...validInput,
      reoccurrence: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('reoccurrence');
    expect(error.type).toBe('required');
  });

  it('should throw if reoccurrence is not an allowed value', () => {
    const input = {
      ...validInput,
      reoccurrence: 'random',
    };
    const error = validate(input);
    expect(error.path).toBe('reoccurrence');
    expect(error.type).toBe('oneOf');
  });

  it('should throw if first exec date is omitted', () => {
    const input = {
      ...validInput,
      firstExecutionDate: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('firstExecutionDate');
    expect(error.type).toBe('required');
  });

  it('should throw if first exec date is not a formatted date', () => {
    const input = {
      ...validInput,
      firstExecutionDate: 'random',
    };
    const error = validate(input);
    expect(error.path).toBe('firstExecutionDate');
    expect(error.type).toBe('isFormattedDate');
  });

  it('should throw if last exec date is omitted', () => {
    const input = {
      ...validInput,
      lastExecutionDate: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('lastExecutionDate');
    expect(error.type).toBe('required');
  });

  it('should throw if last exec date is not a formatted date', () => {
    const input = {
      ...validInput,
      lastExecutionDate: 'random',
    };
    const error = validate(input);
    expect(error.path).toBe('lastExecutionDate');
    expect(error.type).toBe('isFormattedDate');
  });
});
