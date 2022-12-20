import { DateRange } from './misc';

export interface PersonsFilter {
  firstName?: string;
  lastName?: string;
  birthDate?: string | DateRange;
}
