/* eslint-disable @typescript-eslint/no-explicit-any*/

import { SepaCreditTransfersHandler } from '../index';
import { TransferBatchesHandler } from '../transferBatches';
import { Handler } from '../../../handler';
import { ClientCreds, Currencies, MoneyUnit, solarisClientFactory } from '../../../..';

import { sepaCreditTransferInputSchema } from '../../../../validations/schemas/sepaCreditTransfers';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

const transfer = {
  reference: 'foo',
  amount: {
    value: 1000,
    currency: Currencies.EUR,
    unit: MoneyUnit.CENTS,
  },
  recipientName: 'name',
  recipientIban: 'DE89370400440532013000',
  recipientBic: 'AACHDE31XXX',
};

describe('SEPA credit transfers handlers', () => {
  const client = solarisClientFactory(mockCreds);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
    jest
      .spyOn(sepaCreditTransferInputSchema, 'validateSync')
      .mockImplementation(jest.fn());
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const sepaCreditTransfers = new SepaCreditTransfersHandler(client);

  const accountId = 'accountId';
  const personId = 'personId';
  const transferId = 'transferId';

  it('should be an instance of Handler class', () => {
    expect(sepaCreditTransfers).toBeInstanceOf(Handler);
  });

  describe('Constructor', () => {
    it('should attach the batches handler under `batches` namespace', () => {
      expect(sepaCreditTransfers.batches).toBeInstanceOf(
        TransferBatchesHandler
      );
    });
  });

  describe('SepaCreditTransfersHandler.prototype.create', () => {
    it('should validate the input with a schema', () => {
      sepaCreditTransfers.create(personId, accountId, transfer);
      expect(sepaCreditTransferInputSchema.validateSync).toBeCalledWith(
        transfer
      );
    });

    it('should POST to /persons/:personId/accounts/:accountId/transactions/sepa_credit_transfer', () => {
      sepaCreditTransfers.create(personId, accountId, transfer);

      expect(client.post).toBeCalledWith({
        url:
          '/persons/personId/accounts/accountId/transactions/sepa_credit_transfer',
        data: transfer,
      });
    });
  });

  describe('SepaCreditTransfers.prototype.getOne', () => {
    it('should GET from /persons/:personId/accounts/:accountId/transactions/sepa_credit_transfer/:transferId', () => {
      sepaCreditTransfers.getOne(personId, accountId, transferId);
      expect(client.get).toBeCalledWith({
        url:
          '/persons/personId/accounts/accountId/transactions/sepa_credit_transfer/transferId',
      });
    });
  });
});
