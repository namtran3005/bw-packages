import { DateRange } from './misc';

export interface BookingsFilter {
  bookingType?: string;
  description?: string;
  endToEndId?: string;
  recipientName?: string;
  recipientIban?: string;
  recipientBic?: string;
  creditorIdentifier?: string;
  mandateReference?: string;
  transactionId?: string;
  bookingDate?: string | DateRange;
  valutaDate?: string | DateRange;
  recordedAt?: string | DateRange;
}
