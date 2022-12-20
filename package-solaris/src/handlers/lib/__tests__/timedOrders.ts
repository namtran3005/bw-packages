/* eslint-disable @typescript-eslint/no-explicit-any*/

import { TimedOrdersHandler } from '../timedOrders';
import { Handler } from '../../handler';
import { ClientCreds, Currencies, MoneyUnit, solarisClientFactory } from '../../..';

import { timedOrderInputSchema } from '../../../validations/schemas/timedOrders';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

const input = {
  executeAt: '2018-01-01',
  transaction: {
    reference: 'foo',
    amount: {
      value: 1000,
      currency: Currencies.EUR,
      unit: MoneyUnit.CENTS,
    },
    recipientName: 'name',
    recipientIban: 'iban',
    recipientBic: 'bic',
  },
};

describe('Timed orders handlers', () => {
  const client = solarisClientFactory(mockCreds);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
    jest
      .spyOn(timedOrderInputSchema, 'validateSync')
      .mockImplementation(jest.fn());
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const timedOrders = new TimedOrdersHandler(client);

  const accountId = 'accountId';
  const personId = 'personId';
  const orderId = 'orderId';

  it('should be an instance of Handler class', () => {
    expect(timedOrders).toBeInstanceOf(Handler);
  });

  describe('TimedOrdersHandler.prototype.create', () => {
    it('should validate the input with a schema', () => {
      timedOrders.create(personId, accountId, input);
      expect(timedOrderInputSchema.validateSync).toBeCalledWith(input);
    });

    it('should POST to /persons/:personId/accounts/:accountId/timed_orders', () => {
      timedOrders.create(personId, accountId, input);

      expect(client.post).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/timed_orders',
        data: input,
      });
    });
  });

  describe('TimedOrdersHandler.prototype.getOne', () => {
    it('should GET from /persons/:personId/accounts/:accountId/timed_orders/:orderId', () => {
      timedOrders.getOne(personId, accountId, orderId);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/timed_orders/orderId',
      });
    });
  });

  describe('TimedOrdersHandler.prototype.list', () => {
    it('should GET from /persons/:personId/accounts/:accountId/timed_orders using pagination params', () => {
      const params = {
        page: {
          size: 10,
          number: 2,
        },
      };
      timedOrders.list(personId, accountId, params);

      expect(client.get).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/timed_orders',
        params,
      });
    });
  });

  describe('StandingOrdersHandler.prototype.cancel', () => {
    it('should PATCH to /persons/:personId/accounts/:accountId/timed_orders/:orderId/cancel', () => {
      timedOrders.cancel(personId, accountId, orderId);

      expect(client.patch).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/timed_orders/orderId/cancel',
      });
    });
  });
});
