/* eslint-disable @typescript-eslint/no-explicit-any */

import Axios from 'axios';
import axiosRetry from 'axios-retry';

import { SignedApiClient } from '../client';
import * as sigUtils from '../utils/signatures';

const mockUrl = 'https://prereg.bitwala.com';
const mockSecret = 'secret';

const mockAuthHeaders = {
  'x-bitwala-signature': 'signature',
  'x-bitwala-nonce': '9000',
};

const mockConfig = {
  method: 'POST',
  data: { email: 'foo@bar.com' },
  url: 'http://foo.bar',
  headers: {},
};

jest.mock('axios-retry');

describe('Prereg http wrapper', () => {
  beforeAll(() => {
    jest.spyOn(Axios, 'create').mockImplementation((): any => {
      const axios = jest.fn().mockImplementation(x => Promise.resolve(x));
      (axios as any).label = 'mocked axios';
      (axios as any).defaults = {
        headers: {
          common: {},
        },
      };
      return axios;
    });

    jest
      .spyOn(sigUtils, 'getAuthHeaders')
      .mockImplementation(() => mockAuthHeaders);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('`SignedApiClient` class', () => {
    let api: SignedApiClient;

    beforeEach(() => {
      api = new SignedApiClient(mockUrl, mockSecret);
    });

    describe('Constructor', () => {
      it('should save credentials to instance properties', () => {
        expect((api as any).url).toBe(mockUrl);
        expect((api as any).secret).toBe(mockSecret);
      });

      it('should attach a pre-configured axios instance to a class instance', () => {
        expect((api as any).axios.label).toBe('mocked axios');

        expect((Axios.create as any).mock.calls[0][0]).toMatchObject({
          baseURL: `${mockUrl}/`,
          headers: {
            common: {
              'Content-Type': 'application/json',
            },
          },
        });
      });

      it('should process the attached axios instance with axios-retry', () => {
        expect(axiosRetry).toBeCalledWith((api as any).axios, {
          retries: (api as any).retryCount,
          retryDelay: (axiosRetry as any).exponentialDelay,
        });
      });

      it('should initialize retryCount to 3', () => {
        expect((api as any).retryCount).toBe(3);
      });
    });

    describe('SignedApiClient.prototype.call', () => {
      it('should generate signature', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        api.call(mockConfig);
        expect(sigUtils.getAuthHeaders).toBeCalledWith(
          mockConfig.url,
          JSON.stringify(mockConfig.data),
          (api as any).secret
        );
      });

      it('should enrich the headers with auth headers', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        api.call(mockConfig);
        expect((api as any).axios).toBeCalledWith({
          ...mockConfig,
          headers: { ...mockConfig.headers, ...mockAuthHeaders },
        });
      });
    });
  });
});
