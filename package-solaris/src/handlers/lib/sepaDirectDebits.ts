import {
  SepaDirectDebit,
  SepaDirectDebitInput,
} from '../../types/entities/lib/sepaDirectDebits';

import { Handler } from '../handler';

export class SepaDirectDebitHandler extends Handler {
  public create(
    personId: string,
    accountId: string,
    payload: SepaDirectDebitInput
  ): Promise<SepaDirectDebit> {
    return this.client.post({
      url: `/persons/${personId}/accounts/${accountId}/transactions/sepa_direct_debit`,
      data: payload,
    });
  }

  public getOne(
    personId: string,
    accountId: string,
    directDebitId: string
  ): Promise<SepaDirectDebit> {
    return this.client.get({
      url: `/persons/${personId}/accounts/${accountId}/transactions/sepa_direct_debit/${directDebitId}`,
    });
  }
}
