/* eslint-disable @typescript-eslint/no-explicit-any*/

import { StandingOrdersHandler } from '../standingOrders';
import { Handler } from '../../handler';
import {
  Currencies,
  MoneyUnit,
  Reoccurrence,
  StandingOrderTransactionType,
  AutoBuyStandingOrderInput,
  StandingOrderBookingType,
  ClientCreds,
  solarisClientFactory,
} from '../../..';

import {
  standingOrderInputSchema,
  autoBuyStandingOrderInputSchema,
} from '../../../validations/schemas/standingOrders';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

const input = {
  recipientName: 'name',
  recipientIban: 'iban',
  recipientBic: 'bic',
  reference: 'foo',
  amount: {
    value: 1000,
    currency: Currencies.EUR,
    unit: MoneyUnit.CENTS,
  },
  firstExecutionDate: new Date('2018/01/01').toString(),
  lastExecutionDate: new Date('2018/01/01').toString(),
  monthEndExecution: true,
  reoccurrence: Reoccurrence.MONTHLY,
};

const autoBuyInput: AutoBuyStandingOrderInput = {
  transactionType: StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION,
  reference: '5b363e5a8a8a95125b8b07d1',
  bookingType: StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC,
  clearingProfileId: 'bpacp',
  firstExecutionDate: '2021-04-01',
  lastExecutionDate: '2021-04-01',
  amount: {
    value: 1000,
    currency: Currencies.EUR,
    unit: MoneyUnit.CENTS,
  },
  description: 'Example standing order',
  endToEndId: '5b979f02fabc12005b0d94c2',
  monthEndExecution: false,
  reoccurrence: Reoccurrence.MONTHLY,
};

const correctAutoBuyInputs = [
  autoBuyInput,
  {
    transactionType: StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION,
    reference: '5b363e5a8a8a95125b8b07d1',
    bookingType: StandingOrderBookingType.B2C_CRYPTO_EXCHANGE_BTC,
    clearingProfileId: 'bpacp',
    firstExecutionDate: '2021-04-01',
    amount: {
      value: 1000,
      currency: Currencies.EUR,
      unit: MoneyUnit.CENTS,
    },
    reoccurrence: Reoccurrence.MONTHLY,
  },
];

describe('Standing orders handlers', () => {
  const client = solarisClientFactory(mockCreds);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
    jest
      .spyOn(standingOrderInputSchema, 'validateSync')
      .mockImplementation(jest.fn());
    jest
      .spyOn(autoBuyStandingOrderInputSchema, 'validateSync')
      .mockImplementationOnce(jest.fn());
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const standingOrders = new StandingOrdersHandler(client);

  const accountId = 'accountId';
  const personId = 'personId';
  const orderId = 'orderId';

  it('should be an instance of Handler class', () => {
    expect(standingOrders).toBeInstanceOf(Handler);
  });

  describe('StandingOrdersHandler.prototype.create', () => {
    it('should validate the standing order input with a schema', () => {
      standingOrders.create(personId, accountId, input);
      expect(standingOrderInputSchema.validateSync).toBeCalledWith(input);
      expect(
        autoBuyStandingOrderInputSchema.validateSync
      ).not.toHaveBeenCalled();
    });

    it('should validate the AutoBuy standing order input with a schema', () => {
      standingOrders.create(personId, accountId, autoBuyInput);
      expect(autoBuyStandingOrderInputSchema.validateSync).toBeCalledWith(
        autoBuyInput
      );
      expect(standingOrderInputSchema.validateSync).not.toHaveBeenCalled();
    });
    it('should not throw if AutoBuy standing order input is correct', () => {
      for (const correctInput of correctAutoBuyInputs) {
        expect(() =>
          autoBuyStandingOrderInputSchema.validateSync(correctInput)
        ).not.toThrow();
      }
    });
    it('should throw if AutoBuy standing order input does not have the required fields', () => {
      const requiredFields = [
        'transactionType',
        'bookingType',
        'clearingProfileId',
        'firstExecutionDate',
        'amount',
        'reoccurrence',
      ];

      for (const requiredField of requiredFields) {
        const tempInput = { ...autoBuyInput };
        delete tempInput[requiredField as keyof typeof autoBuyInput];

        expect(() =>
          autoBuyStandingOrderInputSchema.validateSync(tempInput)
        ).toThrow();
      }
    });

    it('should POST to /persons/:personId/accounts/:accountId/standing_orders', () => {
      standingOrders.create(personId, accountId, input);

      expect(client.post).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/standing_orders',
        data: input,
      });
    });
  });

  describe('StandingOrdersHandler.prototype.getOne', () => {
    it('should GET from /persons/:personId/accounts/:accountId/standing_orders/:orderId', () => {
      standingOrders.getOne(personId, accountId, orderId);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/standing_orders/orderId',
      });
    });
  });

  describe('StandingOrdersHandler.prototype.list', () => {
    it('should GET from /persons/:personId/accounts/:accountId/standing_orders using listing params', () => {
      const params = {
        page: {
          size: 10,
          number: 2,
        },
      };
      standingOrders.list(personId, accountId, params);

      expect(client.get).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/standing_orders',
        params,
      });
    });
  });

  describe('StandingOrdersHandler.prototype.update', () => {
    it('should PATCH to /persons/:personId/accounts/:accountId/standing_orders/:orderId', () => {
      const patch = {
        amount: {
          value: 1000,
          currency: Currencies.EUR,
          unit: MoneyUnit.CENTS,
        },
        solarisStandingOrderId: 'orderId',
      };

      standingOrders.update(personId, accountId, patch);

      expect(client.patch).toBeCalledWith({
        url: '/persons/personId/accounts/accountId/standing_orders/orderId',
        data: patch,
      });
    });
  });

  describe('StandingOrdersHandler.prototype.cancel', () => {
    it('should PATCH to /persons/:personId/accounts/:accountId/standing_orders/:orderId/cancel', () => {
      standingOrders.cancel(personId, accountId, orderId);

      expect(client.patch).toBeCalledWith({
        url:
          '/persons/personId/accounts/accountId/standing_orders/orderId/cancel',
      });
    });
  });
});
