import { ReservationsFilter } from '../../types/api/filters/lib/reservations';
import { ListingParams } from '../../types/api/pagination';
import { Reservation } from '../../types/entities/lib/reservations';

import { Handler } from '../handler';

export class ReservationsHandler extends Handler {
  public list(
    accountId: string,
    params: ListingParams<ReservationsFilter>
  ): Promise<Reservation[]> {
    return this.client.get({
      url: `/accounts/${accountId}/reservations`,
      params,
    });
  }
}
