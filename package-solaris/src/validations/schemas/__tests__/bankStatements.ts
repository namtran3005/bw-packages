/* eslint-disable @typescript-eslint/no-explicit-any*/

import { bankStatementInputSchema } from '../bankStatements';

const validate = (input: any) => {
  try {
    bankStatementInputSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

describe('Bank statements input schema', () => {
  it('should not throw if valid start and end dates are provided', () => {
    const input = {
      startDate: '2012-01-01',
      endDate: '2013-01-01',
    };
    expect(() => validate(input)).not.toThrow();
  });

  it('should throw if no start date provided', () => {
    const input = { endDate: '2013-01-01' };
    const error = validate(input);
    expect(error.path).toBe('startDate');
    expect(error.type).toBe('required');
  });

  it('should throw if no end date provided', () => {
    const input = { startDate: '2013-01-01' };
    const error = validate(input);
    expect(error.path).toBe('endDate');
    expect(error.type).toBe('required');
  });

  it('should throw if end date is not after the start date', () => {
    const input = { endDate: '2013-01-01', startDate: '2014-01-01' };
    const error = validate(input);
    expect(error.path).toBe('endDate');
    expect(error.type).toBe('isAfterStartDate');
  });
});
