/* eslint-disable @typescript-eslint/no-explicit-any*/

import { IdentificationsHandler } from '../identifications';
import { Handler } from '../../handler';
import { solarisClientFactory, ClientCreds } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Identifications handlers', () => {
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

  const identifications = new IdentificationsHandler(client);

  const identId = 'identId';
  const personId = 'personId';
  const docType = 'Water Bill';
  const docIssueDate = '2018-11-01';
  const language = 'EN';

  it('should be an instance of Handler class', () => {
    expect(identifications).toBeInstanceOf(Handler);
  });

  describe('IdentificationsHandler.prototype.createIdNow', () => {
    it('should POST to /persons/:personId/identifications', () => {
      identifications.createIdNow(personId, docType, docIssueDate);
      expect(client.post).toBeCalledWith({
        url: '/persons/personId/identifications',
        data: {
          method: 'idnow',
          proof_of_address_type: docType,
          proof_of_address_issued_at: docIssueDate,
        },
      });
    });
  });

  describe('IdentificationsHandler.prototype.createAutoIdentIdNow', () => {
    it('should POST to /persons/:personId/identifications', () => {
      identifications.createAutoIdentIdNow(personId, language);
      expect(client.post).toBeCalledWith({
        url: '/persons/personId/identifications',
        data: {
          method: 'idnow_autoident',
          language,
        },
      });
    });
  });

  describe('IdentificationsHandler.prototype.requestIdNow', () => {
    it('should PATCH to /persons/:personId/identifications/:identId/request', () => {
      identifications.requestIdNow(personId, identId);
      expect(client.patch).toBeCalledWith({
        url: '/persons/personId/identifications/identId/request',
      });
    });
  });

  describe('IdentificationsHandler.prototype.getOne', () => {
    it('should GET from /persons/:personId/identifications/:identId', () => {
      identifications.getOne(personId, identId);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/identifications/identId',
      });
    });
  });

  describe('IdentificationsHandler.prototype.listByPerson', () => {
    it('should GET from /persons/:personId/identifications/:identId using listing params', () => {
      const params = {
        page: { size: 10, number: 2 },
      };
      identifications.listByPerson(personId, params);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/identifications',
        params,
      });
    });
  });

  describe('IdentificationsHandler.prototype.getLegitimationData', () => {
    it('should GET from /persons/:personId/identifications/:identId/legitimation_data', () => {
      identifications.getLegitimationData(personId, identId);
      expect(client.get).toBeCalledWith({
        url: '/persons/personId/identifications/identId/legitimation_data',
      });
    });
  });
});
