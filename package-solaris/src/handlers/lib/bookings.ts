import { Booking } from '../../types/entities/lib/bookings';
import { BookingsFilter } from '../../types/api/filters/lib/bookings';
import { ListingParams } from '../../types/api/pagination';

import { Handler } from '../handler';

export class BookingsHandler extends Handler {
  public list(
    accountId: string,
    params: ListingParams<BookingsFilter>
  ): Promise<Booking[]> {
    return this.client.get({ url: `/accounts/${accountId}/bookings`, params });
  }
}
