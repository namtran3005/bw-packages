import {
  BeneficialOwner,
  BeneficialOwnerInput,
} from '../../../types/entities/lib/beneficialOwners';
import { PaginationParams } from '../../../types/api/pagination';

import { Handler } from '../../handler';

export class BeneficialOwnersHandler extends Handler {
  public link(
    businessId: string,
    beneficialOwner: BeneficialOwnerInput
  ): Promise<BeneficialOwner> {
    return this.client.post({
      url: `/businesses/${businessId}/beneficial_owners`,
      data: beneficialOwner,
    });
  }

  public list(
    businessId: string,
    params?: PaginationParams
  ): Promise<BeneficialOwner[]> {
    return this.client.get({
      url: `/businesses/${businessId}/beneficial_owners`,
      params,
    });
  }
}
