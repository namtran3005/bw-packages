/* eslint-disable @typescript-eslint/no-explicit-any*/

import { BookingsHandler } from '../bookings';
import { Handler } from '../../handler';
import { ListingParams, BookingsFilter, ClientCreds, solarisClientFactory } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Bookings handlers', () => {
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

  const bookings = new BookingsHandler(client);

  const accountId = 'accountId';

  it('should be an instance of Handler class', () => {
    expect(bookings).toBeInstanceOf(Handler);
  });

  describe('BookingsHandler.prototype.list', () => {
    const params: ListingParams<BookingsFilter> = {
      page: { size: 10, number: 2 },
      filter: { description: 'foo' },
    };
    it('should GET from `/accounts/:accountId/bookings` using listing params', () => {
      bookings.list(accountId, params);
      expect(client.get).toBeCalledWith({
        url: '/accounts/accountId/bookings',
        params,
      });
    });
  });
});
