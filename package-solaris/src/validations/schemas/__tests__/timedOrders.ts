/* eslint-disable @typescript-eslint/no-explicit-any*/

import { timedOrderInputSchema } from '../timedOrders';
import { MoneyUnit } from '../../../types/misc/lib/money';
import { Currencies } from '../../../types/misc/lib/currencies';
import { TimedOrderInput } from '../../../types/entities/lib/timedOrders';

const validate = (input: any) => {
  try {
    timedOrderInputSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validInput: TimedOrderInput = {
  executeAt: '2018-01-01',
  transaction: {
    reference: 'foo',
    amount: {
      value: 1000,
      currency: Currencies.EUR,
      unit: MoneyUnit.CENTS,
    },
    recipientName: 'name',
    recipientIban: 'DE89370400440532013000',
    recipientBic: 'AACHDE31XXX',
  },
};

describe('Timed order input schema', () => {
  it('should not throw on valid input', () => {
    expect(() => timedOrderInputSchema.validateSync(validInput)).not.toThrow();
  });

  it('should throw if transaction is omitted', () => {
    const input = {
      ...validInput,
      transaction: undefined,
    };
    expect(() => timedOrderInputSchema.validateSync(input as any)).toThrow();
  });

  it('should throw if executeAt is omitted', () => {
    const input = {
      ...validInput,
      executeAt: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('executeAt');
    expect(error.type).toBe('required');
  });

  it('should throw if executeAt is not a formatted date', () => {
    const input = {
      ...validInput,
      executeAt: 'whatever',
    };
    const error = validate(input);
    expect(error.path).toBe('executeAt');
    expect(error.type).toBe('isFormattedDate');
  });
});
