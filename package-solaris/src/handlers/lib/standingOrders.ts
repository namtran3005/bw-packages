import { ChangeRequest } from '../../types/entities/lib/changeRequests';
import { PaginationParams } from '../../types/api/pagination';
import {
  StandingOrder,
  StandingOrderPatch,
  CreateStandingOrderRequest,
  StandingOrderClearingTransaction,
} from '../../types/entities/lib/standingOrders';
import { Handler } from '../handler';
import {
  standingOrderInputSchema,
  autoBuyStandingOrderInputSchema,
} from '../../validations/schemas/standingOrders';

export class StandingOrdersHandler extends Handler {
  public create(
    personId: string,
    accountId: string,
    payload: CreateStandingOrderRequest
  ): Promise<StandingOrder> {
    //ensure AutoBuyStandingOrderInput, since StandingOrderInput doesn't include clearingProfileId prop
    if ('clearingProfileId' in payload) {
      autoBuyStandingOrderInputSchema.validateSync(payload);
    } else {
      standingOrderInputSchema.validateSync(payload);
    }
    return this.client.post({
      url: `/persons/${personId}/accounts/${accountId}/standing_orders`,
      data: payload,
    });
  }

  public getOne(
    personId: string,
    accountId: string,
    orderId: string
  ): Promise<StandingOrder> {
    return this.client.get({
      url: `/persons/${personId}/accounts/${accountId}/standing_orders/${orderId}`,
    });
  }

  public list(
    personId: string,
    accountId: string,
    params?: PaginationParams
  ): Promise<StandingOrder[]> {
    return this.client.get({
      url: `/persons/${personId}/accounts/${accountId}/standing_orders`,
      params,
    });
  }

  public update(
    personId: string,
    accountId: string,
    payload: StandingOrderPatch
  ): Promise<ChangeRequest> {
    return this.client.patch({
      url: `/persons/${personId}/accounts/${accountId}/standing_orders/${payload.solarisStandingOrderId}`,
      data: payload,
    });
  }

  public cancel(
    personId: string,
    accountId: string,
    orderId: string
  ): Promise<ChangeRequest> {
    return this.client.patch({
      url: `/persons/${personId}/accounts/${accountId}/standing_orders/${orderId}/cancel`,
    });
  }

  public execute(
    orderId: string,
    payload: Pick<StandingOrderPatch, 'description'>
  ): Promise<null> {
    return this.client.patch({
      url: `/standing_orders/${orderId}/execute`,
      data: payload,
    });
  }

  public getCreditClearingTransactions(
    personId: string,
    accountId: string,
    orderId: string
  ): Promise<StandingOrderClearingTransaction[]> {
    return this.client.get({
      url: `/persons/${personId}/accounts/${accountId}/standing_orders/${orderId}/credit_clearing_transactions`,
    });
  }
}
