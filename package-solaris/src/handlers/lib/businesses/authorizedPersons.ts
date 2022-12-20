import {
  AuthorizedPerson,
  AuthorizedPersonInput,
} from '../../../types/entities/lib/authorizedPersons';
import { PaginationParams } from '../../../types/api/pagination';

import { Handler } from '../../handler';

export class AuthorizedPersonsHandler extends Handler {
  public link(
    businessId: string,
    accountId: string,
    authorizedPerson: AuthorizedPersonInput
  ): Promise<AuthorizedPerson> {
    return this.client.post({
      url: `/businesses/${businessId}/accounts/${accountId}/authorized_persons`,
      data: authorizedPerson,
    });
  }

  public list(
    businessId: string,
    accountId: string,
    params?: PaginationParams
  ): Promise<AuthorizedPerson[]> {
    return this.client.get({
      url: `/businesses/${businessId}/accounts/${accountId}/authorized_persons`,
      params,
    });
  }
}
