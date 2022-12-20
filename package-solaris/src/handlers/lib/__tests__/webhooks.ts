/* eslint-disable @typescript-eslint/no-explicit-any*/

import humps from 'humps';
import rename from 'deep-rename-keys-ts';

import { WebhooksHandler } from '../webhooks';
import { Handler } from '../../handler';
import * as solarisClient from '../../../client'
import { Errors } from '../../../errors';
import { EventType } from '../../../types/entities/lib/webhooks';
import { solarisClientFactory, ClientCreds } from '../../..';

jest.mock('deep-rename-keys-ts', () => jest.fn((xs: any[]) => xs));

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Webhooks handler', () => {
  const client = solarisClientFactory(mockCreds);

  beforeAll(() => {
    jest.spyOn(client, 'get');
    jest.spyOn(client, 'post');
    jest.spyOn(client, 'patch');
    jest.spyOn(client, 'put');
    jest.spyOn(client, 'delete');
    jest.spyOn(humps, 'camelizeKeys').mockImplementation((x: any) => x);
    jest.spyOn(solarisClient, 'idMapper');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  const webhooks = new WebhooksHandler(client);

  it('should be an instance of Handler class', () => {
    expect(webhooks).toBeInstanceOf(Handler);
  });

  describe('WebhooksHandler.prototype.parseWebhookBody', () => {
    it('should use idMapper and keys camelizer', () => {
      const body = { camel_key: 'baz' };
      webhooks.parseWebhookBody(body);
      expect(rename).toBeCalledWith(body, solarisClient.idMapper);
      expect(humps.camelizeKeys).toBeCalledWith(body);
    });
  });

  describe('WebhooksHandler.prototype.verifySignature', () => {
    it("should throw if expected signature doesn't match the given signature", () => {
      const body = { foo: 'bar' };
      const algo = 'sha256';
      const secret = 'secret';
      const signature = 'random';

      expect(() =>
        webhooks.verifySignature(algo, JSON.stringify(body), secret, signature)
      ).toThrowError(Errors.INVALID_WEBHOOK_SIGNATURE);
    });

    it('should not throw if expected signature matches the given signature', () => {
      const body = { foo: 'bar' };
      const algo = 'sha256';
      const secret = 'secret';
      const signature =
        '3f3ab3986b656abb17af3eb1443ed6c08ef8fff9fea83915909d1b421aec89be';

      expect(() =>
        webhooks.verifySignature(algo, JSON.stringify(body), secret, signature)
      ).not.toThrow();
    });
  });

  describe('WebhooksHandler.prototype.create', () => {
    it('should POST urls and event type to to /webhooks', () => {
      webhooks.create(EventType.BOOKING, 'http://foo.bar');
      expect(client.post).toBeCalledWith({
        url: '/webhooks',
        data: { url: 'http://foo.bar', eventType: EventType.BOOKING },
      });
    });
  });

  describe('WebhooksHandler.prototype.getOne', () => {
    it('should GET from /webhooks/:id', () => {
      webhooks.getOne('id');
      expect(client.get).toBeCalledWith({ url: '/webhooks/id' });
    });
  });

  describe('WebhooksHandler.prototype.list', () => {
    it('should GET from /webhooks', () => {
      webhooks.list();
      expect(client.get).toBeCalledWith({ url: '/webhooks' });
    });
    it('should understand optional pagination params', () => {
      const params = { page: { number: 1, size: 20 } };
      webhooks.list(params);
      expect(client.get).toBeCalledWith({ url: '/webhooks', params });
    });
  });

  describe('WebhooksHandler.prototype.delete', () => {
    it('should DELETE to /webhooks/:id', () => {
      webhooks.delete('id');
      expect(client.delete).toBeCalledWith({ url: '/webhooks/id' });
    });
  });
});
