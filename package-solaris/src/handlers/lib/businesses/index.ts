import {
  Business,
  BusinessInput,
  BusinessPatch,
} from '../../../types/entities/lib/businesses';
import { ChangeRequest } from '../../../types/entities/lib/changeRequests';
import { PaginationParams } from '../../../types/api/pagination';

import { Handler } from '../../handler';
import { ISolaris } from '../../..';
import { AuthorizedPersonsHandler } from './authorizedPersons';
import { BeneficialOwnersHandler } from './beneficialOwners';
import { LegalRepresentativesHandler } from './legalRepresentatives';

export class BusinessesHandler extends Handler {
  public authorizedPersons: AuthorizedPersonsHandler;
  public beneficialOwners: BeneficialOwnersHandler;
  public legalRepresentatives: LegalRepresentativesHandler;

  constructor(client: ISolaris) {
    super(client);

    this.authorizedPersons = new AuthorizedPersonsHandler(this.client);
    this.beneficialOwners = new BeneficialOwnersHandler(this.client);
    this.legalRepresentatives = new LegalRepresentativesHandler(this.client);
  }

  public create(payload: BusinessInput): Promise<Business> {
    return this.client.post({ url: `/businesses`, data: payload });
  }
  public list(params?: PaginationParams): Promise<Business[]> {
    return this.client.get({ url: `/businesses`, params });
  }
  public getOne(businessId: string): Promise<Business> {
    return this.client.get({ url: `/businesses/${businessId}` });
  }
  public update(
    businessId: string,
    payload: BusinessPatch
  ): Promise<Business | ChangeRequest> {
    return this.client.patch({
      url: `/businesses/${businessId}`,
      data: payload,
    });
  }
}
