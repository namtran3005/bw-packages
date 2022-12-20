/* eslint-disable @typescript-eslint/no-explicit-any*/

import { accountInputSchema } from '../accounts';
import { AccountType } from '../../../types/entities/lib/accounts';

const validate = (input: any) => {
  try {
    accountInputSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

describe('Account input schema', () => {
  it('should throw if account type not provided', () => {
    const error = validate({});
    expect(error.path).toBe('type');
    expect(error.type).toBe('required');
  });

  it('should throw if account type is not an allowed value', () => {
    const error = validate({ type: 'random' });
    expect(error.path).toBe('type');
    expect(error.type).toBe('oneOf');
  });

  it('should not throw if account type is provided and valid', () => {
    expect(() =>
      accountInputSchema.validateSync({ type: AccountType.CHECKING_BUSINESS })
    ).not.toThrow();
  });
});
