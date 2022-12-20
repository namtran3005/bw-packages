/* eslint-disable @typescript-eslint/no-explicit-any*/

import { cardInputSchema } from '../cards';
import { CardInput, CardType } from '../../../types/entities/lib/cards';

const validate = (input: any) => {
  try {
    cardInputSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validInput: CardInput = {
  type: CardType.MASTERCARD_DEBIT,
  pin: '0943',
  line1: 'FIRST NAME/LASTNAME',
  reference: '12345678123456781234567812345678',
};

describe('Card input schema', () => {
  it('should not throw on valid input', () => {
    expect(() => cardInputSchema.validateSync(validInput)).not.toThrow();
  });

  it('should throw if pin is omitted', () => {
    const input = {
      ...validInput,
      pin: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('pin');
    expect(error.type).toBe('required');
  });

  it('should throw if pin is too long', () => {
    const input = {
      ...validInput,
      pin: '098529',
    };
    const error = validate(input);
    expect(error.path).toBe('pin');
    expect(error.type).toBe('max');
  });

  it('should throw if pin is too short', () => {
    const input = {
      ...validInput,
      pin: '10',
    };
    const error = validate(input);
    expect(error.path).toBe('pin');
    expect(error.type).toBe('min');
  });

  it('should throw if pin consists of a repeating number', () => {
    const input = {
      ...validInput,
      pin: '1111',
    };
    const error = validate(input);
    expect(error.path).toBe('pin');
    expect(error.type).toBe('isNonRepeating');
  });

  it('should throw if pin is a number sequence', () => {
    const input = {
      ...validInput,
      pin: '1234',
    };
    const error = validate(input);
    expect(error.path).toBe('pin');
    expect(error.type).toBe('isNonSequential');
  });

  it('should throw if line1 is omitted', () => {
    const input = {
      ...validInput,
      line1: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('line1');
    expect(error.type).toBe('required');
  });

  it('should throw if line1 exceeds 21 chars', () => {
    const input = {
      ...validInput,
      line1: ''.padStart(25, 'x'),
    };
    const error = validate(input);
    expect(error.path).toBe('line1');
    expect(error.type).toBe('max');
  });

  it("should throw if line1 doesn't match the regex", () => {
    const input = {
      ...validInput,
      line1: '#$$##sdd',
    };
    const error = validate(input);
    expect(error.path).toBe('line1');
    expect(error.message).toBe('Name on the card is invalid');
  });

  it('allow shortend name containing dot', () => {
    const input = { ...validInput, line1: 'J./RODRIGUEZ' };
    expect(() => cardInputSchema.validateSync(input)).not.toThrow();
  });

  it('allow name containing numbers', () => {
    const input = { ...validInput, line1: 'JOHN/RODRIGUEZ123' };
    expect(() => cardInputSchema.validateSync(input)).not.toThrow();
  });

  it('allow name containing dash', () => {
    const input = { ...validInput, line1: 'JOHN/RODRIGUEZ-JR' };
    expect(() => cardInputSchema.validateSync(input)).not.toThrow();
  });

  it('should throw if reference is shorter than 32 characters', () => {
    const input = {
      ...validInput,
      reference: 'twoShortReference',
    };
    const error = validate(input);
    expect(error.path).toBe('reference');
    expect(error.type).toBe('min');
  });

  it('should throw if reference is longer than 32 characters', () => {
    const input = {
      ...validInput,
      reference:
        '1234567812345678123456781234567812345678123456781234567812345678',
    };
    const error = validate(input);
    expect(error.path).toBe('reference');
    expect(error.type).toBe('max');
  });

  it('should throw if reference is omitted', () => {
    const input = {
      ...validInput,
      reference: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('reference');
    expect(error.type).toBe('required');
  });
});
