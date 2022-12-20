import { Booking } from '../../types/entities/lib/bookings';
import {
  AccountStatement,
  AccountStatementRequest,
} from '../../types/entities/lib/statementsOfAccount';
import { ListingParams } from '../../types/api/pagination';

import { Handler } from '../handler';

import { accountStatementRequestSchema } from '../../validations/schemas/statementsOfAccounts';

export class AccountStatementsHandlers extends Handler {
  public getOne(
    accountId: string,
    payload: AccountStatementRequest
  ): Promise<AccountStatement> {
    accountStatementRequestSchema.validateSync(payload);
    return this.client.post({
      url: `/accounts/${accountId}/statement_of_accounts`,
      data: payload,
    });
  }

  public getBookingsByStatement(
    accountId: string,
    statementId: string,
    params?: ListingParams<null>
  ): Promise<Booking[]> {
    return this.client.get({
      url: `/accounts/${accountId}/statement_of_accounts/${statementId}/bookings`,
      params,
    });
  }
}
