/* eslint-disable @typescript-eslint/no-explicit-any*/

import { SepaDirectDebitHandler } from '../sepaDirectDebits';
import { Handler } from '../../handler';
import { ClientCreds, Currencies, MoneyUnit, Scheme, SequenceType, solarisClientFactory } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('SEPA direct debits handlers', () => {
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

  const sepaDirectDebits = new SepaDirectDebitHandler(client);

  const accountId = 'accountId';
  const personId = 'personId';
  const debitId = 'debitId';

  it('should be an instance of Handler class', () => {
    expect(sepaDirectDebits).toBeInstanceOf(Handler);
  });

  describe('SepaDirectDebitsHandler.prototype.create', () => {
    it('should POST to /persons/:personId/accounts/:accountId/transactions/sepa_direct_debit', () => {
      const input = {
        reference: 'foo',
        amount: {
          value: 1000,
          currency: Currencies.EUR,
          unit: MoneyUnit.CENTS,
        },
        collectionDate: new Date('2018/01/01'),
        mandate: {
          reference: 'bar',
          creditorIdentifier: 'id',
          scheme: Scheme.CORE,
          sequenceType: SequenceType.ONE_OFF,
          signatureDate: new Date('2018/01/01'),
          debtorName: 'debtor',
          debtorIban: 'iban',
          debtorBic: 'bic',
        },
      };

      sepaDirectDebits.create(personId, accountId, input);

      expect(client.post).toBeCalledWith({
        url:
          '/persons/personId/accounts/accountId/transactions/sepa_direct_debit',
        data: input,
      });
    });
  });

  describe('SepaDirectDebitsHandler.prototype.getOne', () => {
    it('should GET from /persons/:personId/accounts/:accountId/transactions/sepa_direct_debit/:debitId', () => {
      sepaDirectDebits.getOne(personId, accountId, debitId);
      expect(client.get).toBeCalledWith({
        url:
          '/persons/personId/accounts/accountId/transactions/sepa_direct_debit/debitId',
      });
    });
  });
});
