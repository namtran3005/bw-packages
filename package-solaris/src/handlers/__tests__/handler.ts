/* eslint-disable @typescript-eslint/no-explicit-any */

import { Handler } from '../handler';
import { solarisClientFactory, ISolaris } from '../..';

const mockCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

const client = solarisClientFactory(mockCreds);

class TestClass extends Handler {
  public test(): ISolaris {
    return this.client;
  }
}

describe('Handler abstract class', () => {
  describe('Constructor', () => {
    it('should instantiate SolarisApiClient and add to instance', () => {
      const handler = new (Handler as any)(client);
      expect((handler as any).client).toBe(client);
    });

    it('should allow subclass access to the SolarisApiClient instance', () => {
      const testInstance = new TestClass(client);
      expect(testInstance.test()).toBe(client);
    });
  });
});
