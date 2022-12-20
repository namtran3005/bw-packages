import { MoneyAmount } from '../../misc';
import { BookingType } from './bookings';

export interface ClearingTransactionInput {
  amount: MoneyAmount;
  bookingType: BookingType;
  description: string;
  clearingProfileId: string;
  reference: string;
}
