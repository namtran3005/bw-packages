/* eslint-disable @typescript-eslint/no-explicit-any*/

import { ChallengeSmsHandler } from '../challengeSms';
import { Handler } from '../../handler';
import { solarisClientFactory, ClientCreds } from '../../..';

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

describe('MFA SMS Challenge handlers', () => {
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

  const smsChallenge = new ChallengeSmsHandler(client);
  const personId = 'personId';
  const smsId = 'smsUUID';
  const smsCode = '123456';

  it('should be an instance of Handler class', () => {
    expect(smsChallenge).toBeInstanceOf(Handler);
  });

  describe('SMSChallengeHandler.prototype.sendSms', () => {
    it('should POST to /mfa/challenges/sms', () => {
      smsChallenge.sendChallengeSms(personId);
      expect(client.post).toBeCalledWith({
        url: '/mfa/challenges/sms',
        data: { personId },
      });
    });
  });

  describe('SMSChallengeHandler.prototype.verifySmsChallenge', () => {
    it('should POST to /mfa/challenges/sms/:id', () => {
      smsChallenge.verifyChallengeSms(smsId, smsCode);
      expect(client.put).toBeCalledWith({
        url: `/mfa/challenges/sms/${smsId}`,
        data: { code: smsCode },
      });
    });
  });
});
