import { PaginationParams } from '../../types/api/pagination';
import {
  TimedOrder,
  TimedOrderInput,
} from '../../types/entities/lib/timedOrders';

import { Handler } from '../handler';

import { timedOrderInputSchema } from '../../validations/schemas/timedOrders';

export class TimedOrdersHandler extends Handler {
  public create(
    personId: string,
    accountId: string,
    payload: TimedOrderInput
  ): Promise<TimedOrder> {
    timedOrderInputSchema.validateSync(payload);
    return this.client.post({
      url: `/persons/${personId}/accounts/${accountId}/timed_orders`,
      data: payload,
    });
  }

  public getOne(
    personId: string,
    accountId: string,
    orderId: string
  ): Promise<TimedOrder> {
    return this.client.get({
      url: `/persons/${personId}/accounts/${accountId}/timed_orders/${orderId}`,
    });
  }

  public list(
    personId: string,
    accountId: string,
    params: PaginationParams
  ): Promise<TimedOrder[]> {
    return this.client.get({
      url: `/persons/${personId}/accounts/${accountId}/timed_orders`,
      params,
    });
  }

  public cancel(
    personId: string,
    accountId: string,
    orderId: string
  ): Promise<TimedOrder> {
    return this.client.patch({
      url: `/persons/${personId}/accounts/${accountId}/timed_orders/${orderId}/cancel`,
    });
  }
}
