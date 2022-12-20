import { Booking } from '../../types/entities/lib/bookings';
import {
  BankStatement,
  BankStatementRequest,
} from '../../types/entities/lib/bankStatements';
import { ListingParams } from '../../types/api/pagination';

import { Handler } from '../handler';

import { bankStatementInputSchema } from '../../validations/schemas/bankStatements';

export class BankStatementsHandlers extends Handler {
  public getOne(
    accountId: string,
    payload: BankStatementRequest
  ): Promise<BankStatement> {
    bankStatementInputSchema.validateSync(payload);
    return this.client.post({
      url: `/accounts/${accountId}/bank_statements`,
      data: payload,
    });
  }

  public getBookingsByStatement(
    accountId: string,
    statementId: string,
    params?: ListingParams<null>
  ): Promise<Booking[]> {
    return this.client.get({
      url: `/accounts/${accountId}/bank_statements/${statementId}/bookings`,
      params
    });
  }
}
