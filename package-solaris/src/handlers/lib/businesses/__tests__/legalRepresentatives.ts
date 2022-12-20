/* eslint-disable @typescript-eslint/no-explicit-any*/

import { LegalRepresentativesHandler } from '../legalRepresentatives';
import { Handler } from '../../../handler';
import { ClientCreds, RepresentationType, solarisClientFactory } from '../../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Legal representatives handlers', () => {
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

  const legalRepresentatives = new LegalRepresentativesHandler(client);

  const businessId = 'businessId';

  it('should be an instance of Handler class', () => {
    expect(legalRepresentatives).toBeInstanceOf(Handler);
  });

  describe('LegalRepresentativesHandler.prototype.link', () => {
    it('should POST to /businesses/:businessId/legal_representatives', () => {
      const legalRepresentative = {
        legalRepresentativeId: 'id',
        typeOfRepresentation: RepresentationType.ALONE,
      };

      legalRepresentatives.link(businessId, legalRepresentative);

      expect(client.post).toBeCalledWith({
        url: '/businesses/businessId/legal_representatives',
        data: legalRepresentative,
      });
    });
  });

  describe('LegalRepresentativesHandler.prototype.list', () => {
    it('should GET from /businesses/:businessId/legal_representatives using pagination params', () => {
      const params = {
        page: {
          size: 10,
          number: 2,
        },
      };
      legalRepresentatives.list(businessId, params);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId/legal_representatives',
        params,
      });
    });
  });
});
