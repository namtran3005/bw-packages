/* eslint-disable @typescript-eslint/no-explicit-any*/

import { ChangeRequestsHandler } from '../changeRequests';
import { Handler } from '../../handler';
import { AuthorizationMethod, ClientCreds, solarisClientFactory } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('Change requests handlers', () => {
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

  const changeRequests = new ChangeRequestsHandler(client);

  const changeRequestId = 'changeRequestId';
  const personId = 'personId';
  const smsTanAuthorizationMethod = AuthorizationMethod.MOBILE_NUMBER;
  const tan = '123456';
  const authorizeChangeRequestInput = {
    changeRequestId,
    personId,
    deliveryMethod: smsTanAuthorizationMethod,
  };
  const confirmChangeRequestInput = {
    changeRequestId,
    personId,
    tan,
  };

  it('should be an instance of Handler class', () => {
    expect(changeRequests).toBeInstanceOf(Handler);
  });

  describe('ChangeRequestsHandler.prototype.authorize', () => {
    it('should POST to /change_requests/:changeRequestId/authorize', () => {
      changeRequests.authorize(authorizeChangeRequestInput);
      expect(client.post).toBeCalledWith({
        url: '/change_requests/changeRequestId/authorize',
        data: {
          personId,
          deliveryMethod: authorizeChangeRequestInput.deliveryMethod,
        },
      });
    });
  });

  describe('ChangeRequestsHandler.prototype.confirm', () => {
    it('should POST to /change_requests/:changeRequestId/confirm', () => {
      changeRequests.confirm(confirmChangeRequestInput);
      expect(client.post).toBeCalledWith({
        url: '/change_requests/changeRequestId/confirm',
        data: { personId, tan },
      });
    });
  });
});
