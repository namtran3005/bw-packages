/* eslint-disable @typescript-eslint/no-explicit-any*/

import Axios, { AxiosRequestConfig } from 'axios';
import humps from 'humps';
import qs from 'qs';
import rename from 'deep-rename-keys-ts';
import axiosRetry from 'axios-retry';

import { Verbs } from '../types/api/http';
import { ClientCreds } from '../';
import { idMapper, paramsSerializer, SolarisApiClient } from '../client';

// eslint-disable-next-line no-var
declare var global: any;

const mockCreds: ClientCreds = {
  url: 'http://foo.bar',
  apiVersion: 'v1',
  clientId: 'clientId',
  clientSecret: 'clientSecret',
};

const axiosDefaults = {
  headers: {
    common: {},
  },
};

const mockDate = new Date('2018-01-01');
const backupNow = Date.now;

jest.mock('deep-rename-keys-ts');
jest.mock('axios-retry');

describe('Solaris http wrapper', () => {
  let api: any;
  beforeAll(() => {
    jest.spyOn(Axios, 'create').mockImplementation(() => {
      const axios = jest.fn().mockImplementation(x => Promise.resolve(x));
      (axios as any).label = 'mocked axios';
      (axios as any).defaults = {
        headers: {
          common: {},
        },
      };
      return axios as any;
    });

    jest.spyOn(qs, 'stringify').mockImplementation(x => x);
    jest.spyOn(humps, 'decamelizeKeys').mockImplementation(x => x);
    jest.spyOn(humps, 'camelizeKeys').mockImplementation(x => x);

    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    jest.spyOn(global, 'setTimeout').mockImplementation((...args) => args);
    jest.spyOn(global, 'clearTimeout').mockImplementation((...args) => args);
  });

  beforeEach(() => {
    jest.clearAllMocks();
    api = new SolarisApiClient(mockCreds);
  });

  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    Date.now = backupNow;
  });

  describe('`idMapper` helper method', () => {
    it('should swap `id` with `solarisId`', () => {
      expect(idMapper('id')).toBe('solarisId');
    });
    it('should not change any keys except `id`', () => {
      expect(idMapper('notAnId')).toBe('notAnId');
    });
  });

  describe('`paramsSerializer` helper method', () => {
    it('should use humps to decamelize keys', () => {
      const params = { foo: 'bar' };
      paramsSerializer(params);
      expect(humps.decamelizeKeys).toBeCalledWith(params);
    });

    it('should use qs to stringify object to a query string without encoding them', () => {
      const params = { foo: 'bar' };
      paramsSerializer(params);
      expect(qs.stringify).toBeCalledWith(params, { encode: false });
    });
  });

  describe('`SolarisApiWrapper` class', () => {
    describe('Constructor', () => {
      it('should save credentials to instance properties', () => {
        Object.keys(mockCreds).forEach(k => {
          expect(api[k]).toBe((mockCreds as any)[k]);
        });
      });

      it('should attach a pre-configured axios instance to a class instance', () => {
        expect(api.axios.label).toBe('mocked axios');

        expect((Axios.create as any).mock.calls[0][0]).toMatchObject({
          baseURL: `${mockCreds.url}/${mockCreds.apiVersion}/`,
          headers: {
            common: {
              'Content-Type': 'application/json',
            },
          },
          paramsSerializer: paramsSerializer,
        });
      });

      it('should process the attached axios instance with axios-retry', () => {
        expect(axiosRetry).toBeCalledWith(api.axios, {
          retries: api.retryCount,
          retryDelay: (axiosRetry as any).exponentialDelay,
        });
      });

      it('should initialize token to null', () => {
        expect(api.token).toBeNull();
      });

      it('should initialize expiresAt to null', () => {
        expect(api.expiresAt).toBeNull();
      });

      it('should initialize refreshPromise to null', () => {
        expect(api.refreshPromise).toBeNull();
      });

      it('should initialize expirationWindow to 2 minutes', () => {
        expect(api.expirationWindow).toBe(120e3);
      });

      it('should initialize unauthorizedCount to 0', () => {
        expect(api.unauthorizedCount).toBe(0);
      });

      it('should initialize unauthorizedThreshold to 5', () => {
        expect(api.unauthorizedThreshold).toBe(5);
      });

      it('should initialize unauthorizedTimeWindow to 5 minutes', () => {
        expect(api.unauthorizedTimeWindow).toBe(300e3);
      });

      it('should initialize retryCount to 3', () => {
        expect(api.retryCount).toBe(3);
      });
    });
  });

  describe('SolarisApiClient.prototype.clearUnauthorizedCount', () => {
    it('should set the `unauthorizedCount` property to 0', () => {
      api.unauthorizedCount = 10;
      api.clearUnauthorizedCount();
      expect(api.unauthorizedCount).toBe(0);
    });

    describe('SolarisApiClient.prototype.setUnauthorizedTimer', () => {
      it('should call global setTimeout with bound handler and store the timer on the instance', () => {
        const boundHandler = jest.fn();

        api.clearUnauthorizedCount.bind = jest
          .fn()
          .mockImplementation(() => boundHandler);

        api.setUnauthorizedTimer();

        expect(api.clearUnauthorizedCount.bind).toBeCalledWith(api);
        expect(global.setTimeout).toBeCalledWith(
          boundHandler,
          api.unauthorizedTimeWindow
        );
        expect(api.unauthorizedCountTimer).toEqual([
          boundHandler,
          api.unauthorizedTimeWindow,
        ]);
      });
    });

    describe('SolarisApiClient.prototype.clearUnauthorizedTimer', () => {
      it('should call global setTimeout with the stored timer', () => {
        api.unauthorizedCountTimer = 'timer';
        api.clearUnauthorizedTimer();

        expect(global.clearTimeout).toBeCalledWith('timer');
      });
    });

    describe('SolarisApiClient.prototype.getToken', () => {
      it('should use axios to make a properly configured token request', async () => {
        const tokenRequest = await api.getToken();

        expect(tokenRequest).toEqual({
          method: Verbs.POST,
          url: `${api.url}/oauth/token`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            grant_type: 'client_credentials',
            client_id: api.clientId,
            client_secret: api.clientSecret,
          },
        });
      });
    });

    describe('SolarisApiClient.prototype.setToken', () => {
      beforeEach(() => {
        jest.spyOn(api as any, 'getToken').mockImplementation(() => ({
          data: {
            accessToken: 'accessToken',
            expiresIn: 60,
          },
        }));
      });

      it("should await and clean up the token refresh request if it's already in flight", async () => {
        api.refreshPromise = Promise.resolve({});
        await api.setToken();
        expect(api.refreshPromise).toBeNull();
      });

      it('should get a new token if no refresh request in flight', async () => {
        await api.setToken();

        expect(api.getToken).toBeCalled();
      });

      it('should attach the received token to the class instance', async () => {
        await api.setToken();

        expect(api.token).toBe('accessToken');
      });

      it('should parse the token expiration time and attach to the class instance', async () => {
        await api.setToken();

        expect(api.expiresAt).toEqual(
          new Date(new Date().getTime() + 60 * 1e3).getTime()
        );
      });

      it('should set the token header on the axios client, attached to the class instance', async () => {
        await api.setToken();

        expect(api.axios.defaults.headers.common.Authorization).toBe(
          'Bearer accessToken'
        );
      });

      it('should set refreshPromise to null after fetching the token and setting up the instance', async () => {
        await api.setToken();

        expect(api.refreshPromise).toBeNull();
      });

      it('should reject if `getToken` rejects', () => {
        jest
          .spyOn(api, 'getToken')
          .mockImplementation(() => Promise.reject(new Error('test')));
        // eslint-disable-next-line jest/valid-expect
        expect(api.setToken()).rejects.toThrowError('test');
      });
    });

    describe('Shorthand http methods', () => {
      const config: AxiosRequestConfig = {
        url: 'http://test.com',
      };

      beforeEach(() => {
        jest.spyOn(api, 'call');
      });

      describe('SolarisApiClient.prototype.get', () => {
        it("should call instance's `call` method with GET HTTP verb", () => {
          api.get(config);
          expect(api.call).toBeCalledWith({ ...config, method: Verbs.GET });
        });
      });

      describe('SolarisApiClient.prototype.post', () => {
        it("should call instance's `call` method with POST HTTP verb", () => {
          api.post(config);
          expect(api.call).toBeCalledWith({ ...config, method: Verbs.POST });
        });
      });

      describe('SolarisApiClient.prototype.patch', () => {
        it("should call instance's `call` method with PATCH HTTP verb", () => {
          api.patch(config);
          expect(api.call).toBeCalledWith({ ...config, method: Verbs.PATCH });
        });
      });

      describe('SolarisApiClient.prototype.put', () => {
        it("should call instance's `call` method with PUT HTTP verb", () => {
          api.put(config);
          expect(api.call).toBeCalledWith({ ...config, method: Verbs.PUT });
        });
      });

      describe('SolarisApiClient.prototype.delete', () => {
        it("should call instance's `call` method with DELETE HTTP verb", () => {
          api.delete(config);
          expect(api.call).toBeCalledWith({ ...config, method: Verbs.DELETE });
        });
      });
    });

    describe('SolarisApiClient.prototype.call', () => {
      const config = {
        url: 'http://test.com',
        data: { bar: 'baz' },
        headers: {},
        // 'axios-retry': {
        //   retries: 0
        // }
      };

      beforeEach(() => {
        // set up the client as if the token is still valid for the allowed time window + 10 sec overhead
        api.expiresAt = new Date().getTime() + api.expirationWindow + 10e3;
        api.token = 'token';

        jest.spyOn(api as any, 'setToken');
      });

      describe('When firing a request', () => {
        it('should decamelize request body json if any', () => {
          api.call(config);
          expect(humps.decamelizeKeys).toBeCalledWith(config.data, {
            split: /(?=[A-Z0-9])/,
          });
        });

        it('should try setting a new token if no token set', () => {
          delete api.token;
          api.call(config);
          expect(api.setToken).toBeCalled();
        });

        it('should try setting a new token if no token expiry date set', () => {
          delete api.expiresAt;
          api.call(config);
          expect(api.setToken).toBeCalled();
        });

        it('should try setting a new token if token expiry date out of the allowed window', () => {
          api.expirationWindow = 1;
          api.expiresAt = new Date().getTime();
          api.call(config);
          expect(api.setToken).toBeCalled();
        });

        it('should call the attached axios instance with formatted config', () => {
          api.call(config);
          expect(api.axios).toBeCalledWith(config);
        });
      });

      describe('In case of a successful response', () => {
        it('should resolve with camelized and id-to-solarisId-mapped response payload', async () => {
          await api.call(config);
          expect(rename).toBeCalledWith(config.data, idMapper);
          expect(humps.camelizeKeys).toBeCalledWith(rename(config.data, () => ''));
        });

        it('should clear the timer which clears the count of unauthorized attempts, encountered during current time interval, if any', async () => {
          jest.spyOn(api as any, 'clearUnauthorizedTimer');
          api.unauthorizedCountTimer = 1;
          await api.call(config);
          expect(api.clearUnauthorizedTimer).toBeCalledWith();
        });

        it('should reset the unauthorized attempts counter if it is greater than 0', async () => {
          jest.spyOn(api as any, 'clearUnauthorizedCount');
          api.unauthorizedCount = 1;
          await api.call(config);
          expect(api.clearUnauthorizedCount).toBeCalled();
        });
      });

      describe('In case of failure', () => {
        describe('In case of HTTP 401 Unauthorized', () => {
          const error = {
            config,
            response: {
              status: 401,
            },
          };

          beforeEach(() => {
            api.axios = jest.fn().mockImplementationOnce(() => {
              api.axios = jest.fn().mockImplementation(x => Promise.resolve(x));
              api.axios.defaults = axiosDefaults;
              return Promise.reject(error);
            });
          });

          describe("In case if number of unauthorized attempts doesn't exceed the allowed value", () => {
            it('should keep track of how many unauthorized attempts were made during a defined time interval', async () => {
              api.unauthorizedCount = api.unauthorizedThreshold - 1;
              api.axios = jest
                .fn()
                .mockImplementation(() => Promise.reject(error));

              try {
                await api.call(config);
                throw new Error('test'); // needed to prevent this from passing if the call doesn't throw
              } catch (e) {
                // eslint-disable-next-line jest/no-try-expect,jest/no-conditional-expect
                expect(api.unauthorizedCount).toBe(api.unauthorizedThreshold);
              }
            });

            it('should try setting a token', async () => {
              await api.call(config);

              expect(api.setToken).toBeCalled();
            });

            it('should set timer to clear the number of unauthorized requests during the window', async () => {
              jest.spyOn(api as any, 'setUnauthorizedTimer');
              await api.call(config);
              expect(api.setUnauthorizedTimer).toBeCalled();
            });

            it('should retry with new token if setting token succeeds', async () => {
              jest.spyOn(api as any, 'getToken').mockImplementation(() => ({
                data: { accessToken: 'new token', expiresIn: 100 },
              }));
              const callPromise = api.call(config);
              jest.spyOn(api, 'call');
              await callPromise;
              expect(api.call).toBeCalledWith({
                ...config,
                headers: { Authorization: 'Bearer new token' },
              });
            });

            it('should rethrow the error if setting token throws', async () => {
              const err = new Error('test error');
              jest
                .spyOn(api as any, 'setToken')
                .mockImplementation(() => Promise.reject(err));
              try {
                await api.call(config);
                throw new Error('test error'); // needed to prevent this from passing if the call doesn't throw
              } catch (e) {
                // eslint-disable-next-line jest/no-try-expect,jest/no-conditional-expect
                expect(e).toEqual(err);
              }
            });
          });

          describe('In case if number of unauthorized attempts exceeds the allowed value', () => {
            beforeEach(() => {
              api.unauthorizedCount = api.unauthorizedThreshold;
            });

            it('should set a flag on the error that too many unauthorized attempt occurred and throw that', async () => {
              expect.assertions(1);
              try {
                await api.call(config);
                throw new Error('test error'); // needed to prevent this from passing if the call doesn't throw
              } catch (e) {
                // eslint-disable-next-line jest/no-try-expect,jest/no-conditional-expect
                expect(e).toEqual({
                  ...error,
                  unauthorizedThresholdReached: true,
                });
              }
            });
          });
        });

        describe('In case when the response code is different from 401', () => {
          const error = {
            config,
            response: {
              status: 500,
            },
          };

          beforeEach(() => {
            api.axios = jest.fn().mockImplementationOnce(() => {
              api.axios = jest.fn().mockImplementation(x => Promise.resolve(x));
              api.axios.defaults = axiosDefaults;
              return Promise.reject(error);
            });
          });

          it('should throw the encountered error', async () => {
            expect.assertions(1);
            try {
              await api.call(config);
              throw new Error('test error'); // needed to prevent this from passing if the call doesn't throw
            } catch (e) {
              // eslint-disable-next-line jest/no-try-expect,jest/no-conditional-expect
              expect(e).toEqual(error);
            }
          });
        });

        describe('In case when the response code is not available', () => {
          const error = 'whatever';

          beforeEach(() => {
            api.axios = jest.fn().mockImplementationOnce(() => {
              api.axios = jest.fn().mockImplementation(x => Promise.resolve(x));
              api.axios.defaults = axiosDefaults;
              return Promise.reject(error);
            });
          });

          it('should throw the encountered error', async () => {
            expect.assertions(1);
            try {
              await api.call(config);
            } catch (err) {
              // eslint-disable-next-line jest/no-try-expect,jest/no-conditional-expect
              expect(err).toEqual(error);
            }
          });
        });
      });
    });
  });
});
