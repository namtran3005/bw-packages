import { createHmac } from 'crypto';
import axios from 'axios';
import { Api } from '../api';

const apiKey = 'apiKey';
const apiVersion = '1.0';
const apiPassphrase = 'apiPassphrase';
const apiSecret = 'apiSecret';
const baseUrl = 'https://upvest.co';

const api = new Api({
  apiKey,
  apiVersion,
  apiPassphrase,
  apiSecret,
  baseUrl,
});

const generateSignature = (message: string) => {
  return createHmac('sha512', apiSecret)
    .update(message)
    .digest('hex');
};

describe('Api', () => {
  beforeAll(() => {
    jest.spyOn(Date, 'now').mockReturnValue(9000);
    jest.spyOn(axios, 'request').mockResolvedValue({ status: 200 });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('Api.prototype.post', () => {
    it('should do request with correct configuration', async () => {
      const endpoint = '/verity';
      const path = `/${apiVersion}${endpoint}`;
      const payload = { id: 'id' };

      const res = await api.post(endpoint, payload);

      expect(res).toMatchObject({ status: 200 });

      expect(axios.request).toBeCalledWith({
        url: `${baseUrl}/${apiVersion}${endpoint}`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'X-UP-API-Key': apiKey,
          'X-UP-API-Passphrase': apiPassphrase,
          'X-UP-API-Timestamp': '9',
          'X-UP-API-Signature': generateSignature(
            `${'9'}${'POST'}${path}${JSON.stringify(payload)}`
          ),
          'X-UP-API-Signed-Path': path,
        },
        data: payload,
      });
    });

    it('should use empty string if payload is not provided', async () => {
      const endpoint = '/verity';
      const path = `/${apiVersion}${endpoint}`;

      const res = await api.post(endpoint);

      expect(res).toMatchObject({ status: 200 });

      expect(axios.request).toBeCalledWith({
        url: `${baseUrl}/${apiVersion}${endpoint}`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'X-UP-API-Key': apiKey,
          'X-UP-API-Passphrase': apiPassphrase,
          'X-UP-API-Timestamp': '9',
          'X-UP-API-Signature': generateSignature(`${'9'}${'POST'}${path}`),
          'X-UP-API-Signed-Path': path,
        },
        data: undefined,
      });
    });
  });

  describe('Api.prototype.get', () => {
    it('should do request with correct configuration', async () => {
      const endpoint = '/verity';
      const path = `/${apiVersion}${endpoint}`;

      const res = await api.get(endpoint);

      expect(res).toMatchObject({ status: 200 });

      expect(axios.request).toBeCalledWith({
        url: `${baseUrl}/${apiVersion}${endpoint}`,
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'X-UP-API-Key': apiKey,
          'X-UP-API-Passphrase': apiPassphrase,
          'X-UP-API-Timestamp': '9',
          'X-UP-API-Signature': generateSignature(`${'9'}${'GET'}${path}`),
          'X-UP-API-Signed-Path': path,
        },
        data: undefined,
      });
    });
  });
});
