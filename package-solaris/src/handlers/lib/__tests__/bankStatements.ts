/* eslint-disable @typescript-eslint/no-explicit-any*/

import { BankStatementsHandlers } from '../bankStatements';
import { Handler } from '../../handler';

import { bankStatementInputSchema } from '../../../validations/schemas/bankStatements';
import { solarisClientFactory, ClientCreds } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

const input = {
  startDate: '2018-01-01',
  endDate: '2018-02-02',
};

describe('Bank Statements handlers', () => {
  const client = solarisClientFactory(mockCreds);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
    jest
      .spyOn(bankStatementInputSchema, 'validateSync')
      .mockImplementation(jest.fn());
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const statements = new BankStatementsHandlers(client);

  const accountId = 'accountId';
  const statementId = 'statementId';

  it('should be an instance of Handler class', () => {
    expect(statements).toBeInstanceOf(Handler);
  });

  describe('BankStatementsHandler.prototype.getOne', () => {
    it('should validate the input with a schema', () => {
      statements.getOne(accountId, input);
      expect(bankStatementInputSchema.validateSync).toBeCalledWith(input);
    });

    it('should POST to /accounts/:accountId/bank_statements', () => {
      statements.getOne(accountId, input);
      expect(client.post).toBeCalledWith({
        url: '/accounts/accountId/bank_statements',
        data: input,
      });
    });
  });

  describe('BankStatementsHandler.prototype.getBookingsByStatement', () => {
    it('should GET from /accounts/:accountId/bank_statements/:statementId/bookings', () => {
      statements.getBookingsByStatement(accountId, statementId);
      expect(client.get).toBeCalledWith({
        url: '/accounts/accountId/bank_statements/statementId/bookings',
      });
    });
  });
});
