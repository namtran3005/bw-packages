/* eslint-disable @typescript-eslint/no-explicit-any*/

import { AccountStatementsHandlers } from '../accountStatements';
import { Handler } from '../../handler';
import { AccountStatementInterval, ClientCreds, solarisClientFactory } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Statements of accounts handlers', () => {
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

  const statements = new AccountStatementsHandlers(client);

  const accountId = 'accountId';
  const statementId = 'statementId';
  const params = {
    page: {
      number: 1,
      size: 100,
    },
  };

  it('should be an instance of Handler class', () => {
    expect(statements).toBeInstanceOf(Handler);
  });

  describe('AccountStatementsHandler.prototype.getOne', () => {
    it('should POST to /accounts/:accountId/statement_of_accounts', () => {
      const input = {
        year: 2018,
        period: 2,
        interval: AccountStatementInterval.QUARTERLY,
      };

      statements.getOne(accountId, input);
      expect(client.post).toBeCalledWith({
        url: '/accounts/accountId/statement_of_accounts',
        data: input,
      });
    });
  });

  describe('AccountStatementsHandler.prototype.getBookingsByStatement', () => {
    it('should GET from /accounts/:accountId/statement_of_accounts/:statementId/bookings - 1', () => {
      statements.getBookingsByStatement(accountId, statementId);
      expect(client.get).toBeCalledWith({
        url: '/accounts/accountId/statement_of_accounts/statementId/bookings',
      });
    });

    it('should GET from /accounts/:accountId/statement_of_accounts/:statementId/bookings - 2', () => {
      statements.getBookingsByStatement(accountId, statementId, params);
      expect(client.get).toBeCalledWith({
        url: '/accounts/accountId/statement_of_accounts/statementId/bookings',
        params,
      });
    });
  });
});
