import {
  SepaCreditTransfer,
  SepaCreditTransferInput,
} from '../../../types/entities/lib/sepaCreditTransfers';

import { Handler } from '../../handler';

import { sepaCreditTransferInputSchema } from '../../../validations/schemas/sepaCreditTransfers';
import { AuthorizationMethod } from '../../../types/misc/lib/authorizationMethods';
import { ISolaris } from '../../..';
import { TransferBatchesHandler } from './transferBatches';

export class SepaCreditTransfersHandler extends Handler {
  public batches: TransferBatchesHandler;

  constructor(client: ISolaris) {
    super(client);

    this.batches = new TransferBatchesHandler(this.client);
  }

  public create(
    personId: string,
    accountId: string,
    payload: SepaCreditTransferInput
  ): Promise<SepaCreditTransfer> {
    sepaCreditTransferInputSchema.validateSync(payload);
    return this.client.post({
      url: `/persons/${personId}/accounts/${accountId}/transactions/sepa_credit_transfer`,
      data: payload,
    });
  }

  public getOne(
    personId: string,
    accountId: string,
    creditTransferId: string
  ): Promise<SepaCreditTransfer> {
    return this.client.get({
      url: `/persons/${personId}/accounts/${accountId}/transactions/sepa_credit_transfer/${creditTransferId}`,
    });
  }

  public authorize(
    personId: string,
    accountId: string,
    creditTransferId: string,
    deliveryMethod: AuthorizationMethod
  ): Promise<SepaCreditTransfer> {
    return this.client.post({
      url: `/persons/${personId}/accounts/${accountId}/transactions/sepa_credit_transfer/${creditTransferId}/authorize`,
      data: { deliveryMethod },
    });
  }

  public confirm(
    personId: string,
    accountId: string,
    creditTransferId: string,
    tan: string
  ): Promise<SepaCreditTransfer> {
    return this.client.post({
      url: `/persons/${personId}/accounts/${accountId}/transactions/sepa_credit_transfer/${creditTransferId}/confirm`,
      data: { authorizationToken: tan },
    });
  }
}
