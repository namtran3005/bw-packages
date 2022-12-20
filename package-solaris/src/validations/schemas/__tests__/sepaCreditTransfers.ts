/* eslint-disable @typescript-eslint/no-explicit-any*/

import { sepaCreditTransferInputSchema } from '../sepaCreditTransfers';
import { MoneyUnit } from '../../../types/misc/lib/money';
import { Currencies } from '../../../types/misc/lib/currencies';
import { SepaCreditTransferInput } from '../../..';

const validate = (input: any) => {
  try {
    sepaCreditTransferInputSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validInput: SepaCreditTransferInput = {
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
};

describe('SEPA credit transfer input schema', () => {
  it('should not throw on valid input', () => {
    expect(() =>
      sepaCreditTransferInputSchema.validateSync(validInput)
    ).not.toThrow();
  });

  it('should throw if reference is omitted', () => {
    const input = { ...validInput, reference: undefined };
    const error = validate(input as any);
    expect(error.path).toBe('reference');
    expect(error.type).toBe('required');
  });

  it('should throw if reference exceeds 60 chars', () => {
    const input = { ...validInput, reference: ''.padStart(65, 'x') };
    const error = validate(input as any);
    expect(error.path).toBe('reference');
    expect(error.type).toBe('max');
  });

  it('should throw if description is set but invalid', () => {
    const input = { ...validInput, description: '$##$###$#!!' };
    const error = validate(input as any);
    expect(error.path).toBe('description');
    expect(error.type).toBe('isSepaString');
  });

  it('should throw if description exceeds 140 chars escaped', () => {
    const input = { ...validInput, description: ''.padStart(150, 'x') };
    const error = validate(input as any);
    expect(error.path).toBe('description');
    expect(error.type).toBe('satisfiesEscapedLength');
  });

  it('should not throw if description is omitted', () => {
    const input = { ...validInput, description: undefined };
    expect(() =>
      sepaCreditTransferInputSchema.validateSync(input as any)
    ).not.toThrow();
  });

  it('should throw if recipient name is omitted', () => {
    const input = { ...validInput, recipientName: undefined };
    const error = validate(input as any);
    expect(error.path).toBe('recipientName');
    expect(error.type).toBe('required');
  });

  it('should throw if recipient name is not a valid sepa string', () => {
    const input = { ...validInput, recipientName: '#$%' };
    const error = validate(input as any);
    expect(error.path).toBe('recipientName');
    expect(error.type).toBe('isSepaString');
  });

  it('should throw if iban is omitted', () => {
    const input = { ...validInput, recipientIban: undefined };
    const error = validate(input as any);
    expect(error.path).toBe('recipientIban');
    expect(error.type).toBe('required');
  });

  it('should throw if iban is not a valid iban', () => {
    const input = { ...validInput, recipientIban: 'NOT AN IBAN AT ALL' };
    const error = validate(input as any);
    expect(error.path).toBe('recipientIban');
    expect(error.type).toBe('isValidIban');
  });

  it('should not throw if bic is omitted', () => {
    const input = { ...validInput, recipientBic: undefined };
    expect(() =>
      sepaCreditTransferInputSchema.validateSync(input as any)
    ).not.toThrow();
  });

  it('should throw if bic is not a valid BIC', () => {
    const input = { ...validInput, recipientBic: 'NOT A BIC AT ALL' };
    const error = validate(input as any);
    expect(error.path).toBe('recipientBic');
    expect(error.type).toBe('isValidBic');
  });

  it('should throw if endToEndId is set but invalid', () => {
    const input = { ...validInput, endToEndId: '$##$###$#!!' };
    const error = validate(input as any);
    expect(error.path).toBe('endToEndId');
    expect(error.type).toBe('isSepaString');
  });

  it('should throw if endToEndId exceeds 60 chars escaped', () => {
    const input = { ...validInput, endToEndId: ''.padStart(70, 'x') };
    const error = validate(input as any);
    expect(error.path).toBe('endToEndId');
    expect(error.type).toBe('satisfiesEscapedLength');
  });

  it('should not throw if endToEndId is omitted', () => {
    const input = { ...validInput, endToEndId: undefined };
    expect(() =>
      sepaCreditTransferInputSchema.validateSync(input as any)
    ).not.toThrow();
  });

  it('should throw if amount is omitted', () => {
    const input = { ...validInput, amount: undefined };
    expect(() =>
      sepaCreditTransferInputSchema.validateSync(input as any)
    ).toThrow();
  });
});
