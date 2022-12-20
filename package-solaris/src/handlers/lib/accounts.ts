import {
  ItemOfAccountsList,
  Account,
  AccountInput,
  AccountBalance,
  AccountWithoutBalance,
  UpdateAccountInput,
  AutomaticAccountClosure,
  AutomaticAccountClosureSuccessfulResponse,
  AutomaticAccountClosureFailedResponse
} from '../../types/entities/lib/accounts';
import {
  CustomerType,
  accountsEndpoints,
} from '../../types/misc/lib/customers';
import { AccountsFilter } from '../../types/api/filters/lib/accounts';
import { ListingParams } from '../../types/api/pagination';
import { Handler } from '../handler';

import { accountInputSchema } from '../../validations/schemas/accounts';

export class AccountsHandler extends Handler {
  public create(
    type: CustomerType,
    ownerEntityId: string,
    payload: AccountInput
  ): Promise<Account> {
    accountInputSchema.validateSync(payload);
    return this.client.post({
      url: `/${accountsEndpoints[type]}/${ownerEntityId}/accounts`,
      data: payload,
    });
  }

  public getOne(
    type: CustomerType,
    ownerEntityId: string,
    accountId: string
  ): Promise<AccountWithoutBalance> {
    return this.client.get({
      url: `/${accountsEndpoints[type]}/${ownerEntityId}/accounts/${accountId}`,
    });
  }

  public getBalance(accountId: string): Promise<AccountBalance> {
    return this.client.get({
      url: `/accounts/${accountId}/balance`,
    });
  }

  public list(
    type: CustomerType,
    ownerEntityId: string,
    params?: ListingParams<AccountsFilter>
  ): Promise<ItemOfAccountsList[]> {
    return this.client.get({
      url: `/${accountsEndpoints[type]}/${ownerEntityId}/accounts`,
      params,
    });
  }

  public update(
    type: CustomerType,
    ownerEntityId: string,
    accountId: string,
    payload: UpdateAccountInput
  ): Promise<ItemOfAccountsList[]> {
    return this.client.patch({
      url: `/${accountsEndpoints[type]}/${ownerEntityId}/accounts/${accountId}`,
      data: payload,
    });
  }

  public close(
    payload: AutomaticAccountClosure
  ): Promise<
    | AutomaticAccountClosureSuccessfulResponse
    | AutomaticAccountClosureFailedResponse
  > {
    return this.client.post({
      url: `/account_closure_requests`,
      data: payload
    });
  }

  public getClosureRequest(
    solarisId: string 
  ): Promise<
    | AutomaticAccountClosureSuccessfulResponse
    | AutomaticAccountClosureFailedResponse
  > {
    return this.client.get({
      url: `/account_closure_requests/${solarisId}`,
    });
  }
}
