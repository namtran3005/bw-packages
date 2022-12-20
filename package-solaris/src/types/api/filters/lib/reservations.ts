import { ReservationType } from '../../../entities/lib/reservations';
import { DateRange } from './misc';

export interface ReservationsFilter {
  reference?: string;
  reservationType?: ReservationType;
  expiresAt?: DateRange;
}
