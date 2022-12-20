import {
  CustomerType,
  accountsEndpoints,
} from '../../types/misc/lib/customers';
import { PaginationParams } from '../../types/api/pagination';
import {
  TaxIdentification,
  TaxIdentificationInput,
} from '../../types/entities/lib/taxIdentifications';

import { Handler } from '../handler';

import { taxIdentificationInputSchema } from '../../validations/schemas/taxIdentifications';

export class TaxIdentificationsHandler extends Handler {
  public submit(
    type: CustomerType,
    ownerEntityId: string,
    payload: TaxIdentificationInput
  ): Promise<TaxIdentification> {
    taxIdentificationInputSchema.validateSync(payload);
    return this.client.post({
      url: `/${accountsEndpoints[type]}/${ownerEntityId}/tax_identifications`,
      data: payload,
    });
  }

  public getOne(
    type: CustomerType,
    ownerEntityId: string,
    identId: string
  ): Promise<TaxIdentification> {
    return this.client.get({
      url: `/${accountsEndpoints[type]}/${ownerEntityId}/tax_identifications/${identId}`,
    });
  }

  public list(
    type: CustomerType,
    ownerEntityId: string,
    params?: PaginationParams
  ): Promise<TaxIdentification[]> {
    return this.client.get({
      url: `/${accountsEndpoints[type]}/${ownerEntityId}/tax_identifications`,
      params,
    });
  }
}
