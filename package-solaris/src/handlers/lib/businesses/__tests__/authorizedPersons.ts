/* eslint-disable @typescript-eslint/no-explicit-any*/

import { AuthorizedPersonsHandler } from '../authorizedPersons';
import { Handler } from '../../../handler';
import { solarisClientFactory, ClientCreds } from '../../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Authorized persons handlers', () => {
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

  const authorizedPersons = new AuthorizedPersonsHandler(client);

  const accountId = 'accountId';
  const businessId = 'businessId';

  it('should be an instance of Handler class', () => {
    expect(authorizedPersons).toBeInstanceOf(Handler);
  });

  describe('AuthorizedPersonsHandler.prototype.link', () => {
    it('should POST to /businesses/:businessId/accounts/:accountId/authorized_persons', () => {
      const authorizedPerson = {
        authorizedPersonId: 'id',
      };

      authorizedPersons.link(businessId, accountId, authorizedPerson);

      expect(client.post).toBeCalledWith({
        url: '/businesses/businessId/accounts/accountId/authorized_persons',
        data: authorizedPerson,
      });
    });
  });

  describe('AuthorizedPersonsHandler.prototype.list', () => {
    it('should GET from /businesses/:businessId/accounts/:accountId/authorized_persons using pagination params', () => {
      const params = {
        page: {
          size: 10,
          number: 2,
        },
      };
      authorizedPersons.list(businessId, accountId, params);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId/accounts/accountId/authorized_persons',
        params,
      });
    });
  });
});
