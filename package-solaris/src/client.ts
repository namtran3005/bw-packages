/* eslint-disable @typescript-eslint/no-explicit-any*/

import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import humps from 'humps';
import qs from 'qs';
import rename from 'deep-rename-keys-ts';
import axiosRetry from 'axios-retry';

import { Verbs } from './types/api/http';
import { ClientCreds, ISolaris } from './iSolaris';

export interface TokenData {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
}

export const paramsSerializer = (params: any): string =>
  qs.stringify(humps.decamelizeKeys(params), { encode: false });

export const idMapper = (k: string): string => (k === 'id' ? 'solarisId' : k);

// TODO: respect ratelimiting on this end when solaris implement that

export class SolarisApiClient implements ISolaris {
  // Commented out until solaris has rate limiting

  // public static wait(ms: number): Promise<void> {
  //   return new Promise(resolve => {
  //     global.setTimeout(resolve, ms);
  //   });
  // }

  // Commented out until solaris has rate limiting

  // private lastCallTime: number | null = null;
  // private callIntervalMs: number = 100;

  private url: string;
  private apiVersion: string;

  private token: string | null = null;
  private expiresAt: number | null = null;

  private refreshPromise: Promise<TokenData> | null = null;

  private clientId: string;
  private clientSecret: string;

  private expirationWindow: number = 120e3;

  private unauthorizedCount: number = 0;
  private unauthorizedThreshold: number = 5;
  private unauthorizedTimeWindow: number = 300e3;

  private axios: AxiosInstance;

  private unauthorizedCountTimer?: NodeJS.Timer;

  private retryCount: number = 3;

  constructor(creds: ClientCreds) {
    this.url = creds.url;
    this.apiVersion = creds.apiVersion;

    this.clientId = creds.clientId;
    this.clientSecret = creds.clientSecret;

    this.axios = Axios.create({
      baseURL: `${this.url}/${this.apiVersion}/`,
      headers: {
        common: {
          'Content-Type': 'application/json',
        },
      },
      paramsSerializer: paramsSerializer,
    });

    axiosRetry(this.axios, {
      retries: this.retryCount,
      retryDelay: axiosRetry.exponentialDelay,
    });
  }

  public async call(config: AxiosRequestConfig): Promise<any> {
    // schedule to avoid hitting rate-limiting.
    // Commented out until solaris has rate limiting

    // const now = Date.now();
    // if (this.lastCallTime) {
    //   const waitPeriodForThisRequest = this.lastCallTime + this.callIntervalMs - now;

    //   if (waitPeriodForThisRequest > 0) {
    //     this.lastCallTime += this.callIntervalMs;
    //     await SolarisApiClient.wait(waitPeriodForThisRequest);
    //   } else {
    //     this.lastCallTime = now;
    //   }
    // } else {
    //   this.lastCallTime = now;
    // }

    // convert case of payload
    if (config.data) {
      config.data = humps.decamelizeKeys(config.data, {
        split: /(?=[A-Z0-9])/,
      });
    }

    // get token if no token or about to expire
    if (
      !this.token ||
      !this.expiresAt ||
      this.expiresAt - new Date().getTime() < this.expirationWindow
    ) {
      await this.setToken();
    }

    try {
      const res = await this.axios(config);

      if (this.unauthorizedCount > 0) {
        this.clearUnauthorizedCount();
      }

      if (this.unauthorizedCountTimer) {
        this.clearUnauthorizedTimer();
      }

      // convert response payload case if needed
      return res.data === '' || Buffer.isBuffer(res.data)
        ? res
        : humps.camelizeKeys(rename(res.data, idMapper));
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        error.solarisError = error.response.data.errors[0];
      }
      // request token and retry if token expired
      if (error.config && error.response && error.response.status === 401) {
        // @TODO: remove after debug
        // eslint-disable-next-line
        console.log(
          '401 at sB api wrapper',
          this.expiresAt,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          new Date(this.expiresAt!),
          this.unauthorizedCount
        );

        if (this.unauthorizedCount >= this.unauthorizedThreshold) {
          error.unauthorizedThresholdReached = true;
          throw error;
        }

        this.unauthorizedCount++;

        this.setUnauthorizedTimer();

        await this.setToken();

        error.config.headers.Authorization = `Bearer ${this.token}`;

        return this.call(error.config);
      }
      throw error;
    }
  }

  public get(config: AxiosRequestConfig): Promise<any> {
    return this.call({ ...config, method: Verbs.GET });
  }

  public post(config: AxiosRequestConfig): Promise<any> {
    return this.call({ ...config, method: Verbs.POST });
  }

  public patch(config: AxiosRequestConfig): Promise<any> {
    return this.call({ ...config, method: Verbs.PATCH });
  }

  public put(config: AxiosRequestConfig): Promise<any> {
    return this.call({ ...config, method: Verbs.PUT });
  }

  public delete(config: AxiosRequestConfig): Promise<any> {
    return this.call({ ...config, method: Verbs.DELETE });
  }

  private clearUnauthorizedCount() {
    this.unauthorizedCount = 0;
  }

  private setUnauthorizedTimer() {
    this.unauthorizedCountTimer = global.setTimeout(
      this.clearUnauthorizedCount.bind(this),
      this.unauthorizedTimeWindow
    );
  }

  private clearUnauthorizedTimer() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    global.clearTimeout(this.unauthorizedCountTimer!);
  }

  private async getToken(): Promise<AxiosResponse<TokenData>> {
    return this.axios({
      method: Verbs.POST,
      url: `${this.url}/oauth/token`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
      },
    });
  }

  private async setToken(): Promise<void> {
    if (!this.refreshPromise) {
      // eslint-disable-next-line no-async-promise-executor
      this.refreshPromise = new Promise(async (resolve, reject) => {
        try {
          // unset old token from the headers
          delete this.axios.defaults.headers.common.Authorization;
          // request new token
          const tokenData = await this.getToken();
          const parsedTokenData: TokenData = humps.camelizeKeys(
            tokenData.data
          ) as TokenData;
          this.token = parsedTokenData.accessToken;
          this.expiresAt = new Date(
            new Date().getTime() + parsedTokenData.expiresIn * 1e3
          ).getTime();
          this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
          return resolve(parsedTokenData);
        } catch (e) {
          // eslint-disable-next-line
          console.log('Failed to refresh sB token', e);
          return reject(e);
        }
      });
    }

    try {
      await this.refreshPromise;
      this.refreshPromise = null;
    } catch (e) {
      this.refreshPromise = null;
      throw e;
    }
  }
}
