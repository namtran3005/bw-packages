import { SepaCreditTransferInput } from '../../../types/entities/lib/sepaCreditTransfers';
import { TransferBatch } from '../../../types/entities/lib/transferBatches';
import { ChangeRequest } from '../../../types/entities/lib/changeRequests';

import { Handler } from '../../handler';

export class TransferBatchesHandler extends Handler {
  public create(
    personId: string,
    accountId: string,
    transfers: SepaCreditTransferInput[]
  ): Promise<ChangeRequest> {
    return this.client.post({
      url: `/persons/${personId}/accounts/${accountId}/transactions/sepa_credit_transfer/batches`,
      data: { transactions: transfers },
    });
  }

  public getOne(
    personId: string,
    accountId: string,
    batchId: string
  ): Promise<TransferBatch> {
    return this.client.get({
      url: `/persons/${personId}/accounts/${accountId}/transactions/sepa_credit_transfer/batches/${batchId}`,
    });
  }
}
