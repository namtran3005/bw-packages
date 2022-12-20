/* eslint-disable @typescript-eslint/no-explicit-any*/

import { ReservationsHandler } from '../reservations';
import { Handler } from '../../handler';
import { solarisClientFactory, ClientCreds } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Reservations handlers', () => {
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

  const reservations = new ReservationsHandler(client);

  const accountId = 'accountId';

  it('should be an instance of Handler class', () => {
    expect(reservations).toBeInstanceOf(Handler);
  });

  describe('ReservationsHandler.prototype.list', () => {
    it('should GET from /accounts/:accountId/reservations using listing params', () => {
      const params = {
        page: { size: 10, number: 2 },
        filter: { reference: 'foo' },
      };

      reservations.list(accountId, params);

      expect(client.get).toBeCalledWith({
        url: '/accounts/accountId/reservations',
        params,
      });
    });
  });
});
