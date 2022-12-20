import {
  Identification,
  Legitimation,
} from '../../types/entities/lib/identifications';
import { PaginationParams } from '../../types/api/pagination';

import { Handler } from '../handler';

// TODO: business verifications

export class IdentificationsHandler extends Handler {
  public createIdNow(
    personId: string,
    addressDocType?: string,
    addressIssueDate?: string
  ): Promise<Identification> {
    return this.client.post({
      url: `/persons/${personId}/identifications`,
      data: {
        method: 'idnow',
        proof_of_address_type: addressDocType,
        proof_of_address_issued_at: addressIssueDate,
      },
    });
  }

  public createAutoIdentIdNow(
    personId: string,
    language: string
  ): Promise<Identification> {
    return this.client.post({
      url: `/persons/${personId}/identifications`,
      data: {
        method: 'idnow_autoident',
        language,
      },
    });
  }

  public requestIdNow(
    personId: string,
    identId: string
  ): Promise<Identification> {
    return this.client.patch({
      url: `/persons/${personId}/identifications/${identId}/request`,
    });
  }

  public getOne(personId: string, identId: string): Promise<Identification> {
    return this.client.get({
      url: `/persons/${personId}/identifications/${identId}`,
    });
  }

  public listByPerson(
    personId: string,
    params?: PaginationParams
  ): Promise<Identification[]> {
    return this.client.get({
      url: `/persons/${personId}/identifications`,
      params,
    });
  }

  public getLegitimationData(
    personId: string,
    identId: string
  ): Promise<Legitimation> {
    return this.client.get({
      url: `/persons/${personId}/identifications/${identId}/legitimation_data`,
    });
  }
}
