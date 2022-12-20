import { ClearingTransactionInput } from '../../types/entities/lib/crypto';
import { Handler } from '../handler';
import { ChangeRequest } from '../../types';

// import { accountInputSchema } from '../../validations/schemas/accounts';

export class CryptoHandler extends Handler {
  public createClearingTransaction(
    accountId: string,
    payload: ClearingTransactionInput
  ): Promise<ChangeRequest> {
    // TODO validate schema
    // accountInputSchema.validateSync(payload);
    return this.client.post({
      url: `/accounts/${accountId}/credit_clearing_transactions`,
      data: payload,
    });
  }
}
