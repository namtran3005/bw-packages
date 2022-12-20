/* eslint-disable @typescript-eslint/no-explicit-any*/

import { BeneficialOwnersHandler } from '../beneficialOwners';
import { Handler } from '../../../handler';
import { solarisClientFactory, ClientCreds } from '../../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Beneficial owners handlers', () => {
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

  const beneficialOwners = new BeneficialOwnersHandler(client);

  const businessId = 'businessId';

  it('should be an instance of Handler class', () => {
    expect(beneficialOwners).toBeInstanceOf(Handler);
  });

  describe('BeneficialOwnersHandler.prototype.link', () => {
    it('should POST to /businesses/:businessId/beneficial_owners', () => {
      const beneficialOwner = {
        personId: 'id',
        votingShare: 10,
      };

      beneficialOwners.link(businessId, beneficialOwner);

      expect(client.post).toBeCalledWith({
        url: '/businesses/businessId/beneficial_owners',
        data: beneficialOwner,
      });
    });
  });

  describe('BeneficialOwnersHandler.prototype.list', () => {
    it('should GET from /businesses/:businessId/beneficial_owners using pagination params', () => {
      const params = {
        page: {
          size: 10,
          number: 2,
        },
      };
      beneficialOwners.list(businessId, params);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId/beneficial_owners',
        params,
      });
    });
  });
});
