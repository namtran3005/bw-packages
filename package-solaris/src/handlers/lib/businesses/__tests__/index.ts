/* eslint-disable @typescript-eslint/no-explicit-any*/

import { BusinessesHandler } from '../index';
import { AuthorizedPersonsHandler } from '../authorizedPersons';
import { BeneficialOwnersHandler } from '../beneficialOwners';
import { LegalRepresentativesHandler } from '../legalRepresentatives';
import { Handler } from '../../../handler';
import {
  Sector,
  Industry,
  IndustryKey,
  Countries,
  LegalForm,
  TaxConfirmation,
  CompanyType,
  ClientCreds,
  solarisClientFactory,
} from '../../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Businesses handlers', () => {
  const client = solarisClientFactory(mockCreds);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const businesses = new BusinessesHandler(client);

  const businessId = 'businessId';

  it('should be an instance of Handler class', () => {
    expect(businesses).toBeInstanceOf(Handler);
  });

  describe('Constructor', () => {
    it('should attach the authorized persons handler under `authorizedPersons` namespace', () => {
      expect(businesses.authorizedPersons).toBeInstanceOf(
        AuthorizedPersonsHandler
      );
    });

    it('should attach the beneficial owners handler under `beneficialOwners` namespace', () => {
      expect(businesses.beneficialOwners).toBeInstanceOf(
        BeneficialOwnersHandler
      );
    });

    it('should attach the legal representatives handler under `legalRepresentatives` namespace', () => {
      expect(businesses.legalRepresentatives).toBeInstanceOf(
        LegalRepresentativesHandler
      );
    });
  });

  describe('BusinessesHandler.prototype.create', () => {
    it('should POST to /businesses', () => {
      const business = {
        name: 'Acme inc.',
        sector: Sector.OTHER_COMPANIES,
        industry: Industry.OTHER_SERVICES,
        industryKey: IndustryKey.CIVIL_ENGINEERING,
        address: {
          line1: 'Some str. 1',
          postalCode: '12345',
          city: 'Arkham',
          country: Countries.US,
        },
        legalForm: LegalForm.GMBH,
        foundationDate: new Date('2018/01/01'),
        taxInformation: {
          taxCountry: Countries.US,
          taxConfirmation: TaxConfirmation.ANNUALY,
          registrationNumber: '1234567',
          registrationIssuer: 'Issuer',
        },
        fatcaRelevant: true,
        crsCompanyType: CompanyType.FE_NON_REPORTING,
        businessPurpose: 'none',
      };

      businesses.create(business);

      expect(client.post).toBeCalledWith({
        url: '/businesses',
        data: business,
      });
    });
  });

  describe('BusinessHandler.prototype.getOne', () => {
    it('should GET from /businesses/:businessId', () => {
      businesses.getOne(businessId);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId',
      });
    });
  });

  describe('BusinessHandler.prototype.list', () => {
    it('should GET from /businesses using pagination params', () => {
      const params = {
        page: {
          size: 10,
          number: 2,
        },
      };
      businesses.list(params);
      expect(client.get).toBeCalledWith({
        url: '/businesses',
        params,
      });
    });
  });

  describe('BusinessHandler.prototype.update', () => {
    it('should PATCH to /businesses/:businessId', () => {
      const patch = {
        fatcaRelevant: false,
      };
      businesses.update(businessId, patch);
      expect(client.patch).toBeCalledWith({
        url: '/businesses/businessId',
        data: patch,
      });
    });
  });
});
