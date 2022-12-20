import {
  LegalRepresentative,
  LegalRepresentativeInput,
} from '../../../types/entities/lib/legalRepresentatives';
import { PaginationParams } from '../../../types/api/pagination';

import { Handler } from '../../handler';

export class LegalRepresentativesHandler extends Handler {
  public link(
    businessId: string,
    representative: LegalRepresentativeInput
  ): Promise<LegalRepresentative> {
    return this.client.post({
      url: `/businesses/${businessId}/legal_representatives`,
      data: representative,
    });
  }

  public list(
    businessId: string,
    params?: PaginationParams
  ): Promise<LegalRepresentative[]> {
    return this.client.get({
      url: `/businesses/${businessId}/legal_representatives`,
      params,
    });
  }
}
