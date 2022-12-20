/* eslint-disable @typescript-eslint/no-explicit-any*/

import { AccountsHandler } from '../accounts';
import { Handler } from '../../handler';
import {
  CustomerType,
  AccountType,
  ListingParams,
  AccountsFilter,
  ClientCreds,
  solarisClientFactory,
  BlockingAccountReason,
  UpdateAccountInput,
} from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Accounts handlers', () => {
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

  const accounts = new AccountsHandler(client);

  const personId = 'personId';
  const accountId = 'accountId';
  const businessId = 'businessId';

  it('should be an instance of Handler class', () => {
    expect(accounts).toBeInstanceOf(Handler);
  });

  describe('AccountsHandler.prototype.create', () => {
    it('should POST payload to `/persons/:personId/accounts` for persons', () => {
      const payload = { type: AccountType.CHECKING_BUSINESS };
      accounts.create(CustomerType.PERSONAL, 'id', payload);
      expect(client.post).toBeCalledWith({
        url: '/persons/id/accounts',
        data: payload,
      });
    });

    it('should POST payload to `/businesses/:businessId/accounts` for businesses', () => {
      const payload = { type: AccountType.CHECKING_BUSINESS };
      accounts.create(CustomerType.BUSINESS, 'id', payload);
      expect(client.post).toBeCalledWith({
        url: '/businesses/id/accounts',
        data: payload,
      });
    });
  });

  describe('AccountsHandler.prototype.getOne', () => {
    it('should GET from `/persons/:personId/accounts/:accountId` for persons', () => {
      accounts.getOne(CustomerType.PERSONAL, personId, accountId);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/accounts/accountId',
      });
    });

    it('should GET from `/businesses/:businessId/accounts/:accountId` for businesses', () => {
      accounts.getOne(CustomerType.BUSINESS, businessId, accountId);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId/accounts/accountId',
      });
    });
  });

  describe('AccountsHandler.prototype.list', () => {
    const params: ListingParams<AccountsFilter> = {
      page: { size: 10, number: 2 },
      filter: { iban: 'foo' },
    };
    it('should GET from `/persons/:personId/accounts` for persons using listing params', () => {
      accounts.list(CustomerType.PERSONAL, personId, params);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/accounts',
        params,
      });
    });

    it('should GET from `/businesses/:businessId/accounts` for businesses using listing params', () => {
      accounts.list(CustomerType.BUSINESS, businessId, params);
      expect(client.get).toBeCalledWith({
        url: '/businesses/businessId/accounts',
        params,
      });
    });
  });

  describe('AccountsHandler.prototype.update', () => {
    it('should PATCH payload to `/persons/:person_id/accounts/:account_id` for persons', () => {
      const payload: UpdateAccountInput = {
        blockReasons: [BlockingAccountReason.CUSTOMER_WISH],
        personId,
        accountId,
        comment: 'test',
      };
      accounts.update(CustomerType.PERSONAL, personId, accountId, payload);
      expect(client.patch).toBeCalledWith({
        url: '/persons/personId/accounts/accountId',
        data: payload,
      });
    });
  });
});
