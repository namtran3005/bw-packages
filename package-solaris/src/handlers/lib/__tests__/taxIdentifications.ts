/* eslint-disable @typescript-eslint/no-explicit-any*/

import { TaxIdentificationsHandler } from '../taxIdentifications';
import { Handler } from '../../handler';
import { ClientCreds, Countries, CustomerType, solarisClientFactory } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Tax identifications handlers', () => {
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

  const taxIdentifications = new TaxIdentificationsHandler(client);

  const personId = 'personId';
  const businessId = 'businessId';
  const identId = 'identId';

  it('should be an instance of Handler class', () => {
    expect(taxIdentifications).toBeInstanceOf(Handler);
  });

  describe('TaxIdentificationsHandler.prototype.submit', () => {
    it('should POST to /persons/:personId/tax_identifications for persons', () => {
      const input = {
        country: Countries.US,
        primary: true,
        number: '3234234234',
      };

      taxIdentifications.submit(CustomerType.PERSONAL, personId, input);

      expect(client.post).toBeCalledWith({
        url: '/persons/personId/tax_identifications',
        data: input,
      });
    });

    it('should POST to /businesses/:businessId/tax_identifications for businesses', () => {
      const input = {
        country: Countries.US,
        primary: true,
        number: '3234234234',
      };

      taxIdentifications.submit(CustomerType.BUSINESS, businessId, input);

      expect(client.post).toBeCalledWith({
        url: '/businesses/businessId/tax_identifications',
        data: input,
      });
    });
  });

  describe('TaxIdentificationsHandler.prototype.getOne', () => {
    it('should GET from /persons/:personId/tax_identifications/:identId for persons', () => {
      taxIdentifications.getOne(CustomerType.PERSONAL, personId, identId);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/tax_identifications/identId',
      });
    });

    it('should GET from /businesses/:businessId/tax_identifications/:identId for businesses', () => {
      taxIdentifications.getOne(CustomerType.BUSINESS, businessId, identId);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId/tax_identifications/identId',
      });
    });
  });

  describe('TaxIdentificationsHandler.prototype.list', () => {
    it('should GET from /persons/:personId/tax_identifications/ for persons using pagination params', () => {
      const params = {
        page: {
          size: 10,
          number: 5,
        },
      };
      taxIdentifications.list(CustomerType.PERSONAL, personId, params);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/tax_identifications',
        params,
      });
    });

    it('should GET from /businesses/:businessId/tax_identifications/ for businesses using pagination params', () => {
      const params = {
        page: {
          size: 10,
          number: 5,
        },
      };
      taxIdentifications.list(CustomerType.BUSINESS, businessId, params);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId/tax_identifications',
        params,
      });
    });
  });
});
