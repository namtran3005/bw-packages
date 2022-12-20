import * as faker from 'faker';
import { bookingValidationSchema } from '../webhooks';
import { Booking, BookingType } from '../../../types/entities/lib/bookings';
import { MoneyUnit } from '../../../types';
import { Currencies } from '../../..';

const validate = (input: any) => {
  try {
    bookingValidationSchema.validateSync(input);
    throw new Error('Test wrong');
  } catch (e) {
    return e;
  }
};

const validInput: Booking = {
  solarisId: faker.datatype.uuid(),
  creationDate: faker.date.recent(),
  valutaDate: faker.date.recent(),
  bookingDate: faker.date.recent(),
  bookingType: BookingType.SEPA_CREDIT_TRANSFER,
  amount: {
    value: faker.datatype.number(),
    unit: MoneyUnit.CENTS,
    currency: Currencies.EUR,
  },
};

describe('Booking input schema validation', () => {
  it('should not throw on valid input', () => {
    expect(() => bookingValidationSchema.validate(validInput)).not.toThrow();
  });

  it('should throw if solarisId is omitted', () => {
    const input = {
      ...validInput,
      solarisId: undefined,
    };
    const error = validate(input);
    expect(error.path).toBe('solarisId');
    expect(error.type).toBe('required');
  });
});
