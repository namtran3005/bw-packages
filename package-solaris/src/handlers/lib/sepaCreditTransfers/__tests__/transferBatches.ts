/* eslint-disable @typescript-eslint/no-explicit-any*/

import { TransferBatchesHandler } from '../transferBatches';
import { Handler } from '../../../handler';
import { ClientCreds, Currencies, MoneyUnit, solarisClientFactory } from '../../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Transfer batches handlers', () => {
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

  const transferBatches = new TransferBatchesHandler(client);

  const accountId = 'accountId';
  const personId = 'personId';
  const batchId = 'batchId';

  it('should be an instance of Handler class', () => {
    expect(transferBatches).toBeInstanceOf(Handler);
  });

  describe('TransferBatchesHandler.prototype.create', () => {
    it('should POST to /persons/:personId/accounts/:accountId/transactions/sepa_credit_transfer/batches', () => {
      const transfers = [
        {
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
        {
          reference: 'bar',
          amount: {
            value: 2000,
            currency: Currencies.EUR,
            unit: MoneyUnit.CENTS,
          },
          recipientName: 'name',
          recipientIban: 'iban',
          recipientBic: 'bic',
        },
      ];

      transferBatches.create(personId, accountId, transfers);

      expect(client.post).toBeCalledWith({
        url:
          '/persons/personId/accounts/accountId/transactions/sepa_credit_transfer/batches',
        data: { transactions: transfers },
      });
    });
  });

  describe('TransferBatchesHandler.prototype.getOne', () => {
    it('should GET from /persons/:personId/accounts/:accountId/transactions/sepa_credit_transfer/batches/:batchId', () => {
      transferBatches.getOne(personId, accountId, batchId);
      expect(client.get).toBeCalledWith({
        url:
          '/persons/personId/accounts/accountId/transactions/sepa_credit_transfer/batches/batchId',
      });
    });
  });
});
