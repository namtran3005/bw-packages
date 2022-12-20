/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';

import { getAuthHeaders } from './utils/signatures';

export class SignedApiClient {
  private url: string;
  private secret: string;
  private axios: AxiosInstance;
  private retryCount: number = 3;

  constructor(url: string, secret: string) {
    this.url = url;
    this.secret = secret;

    this.axios = Axios.create({
      baseURL: `${this.url}/`,
      headers: {
        common: {
          'Content-Type': 'application/json',
        },
      },
    });

    axiosRetry(this.axios, {
      retries: this.retryCount,
      retryDelay: axiosRetry.exponentialDelay,
    });
  }

  public async call(config: AxiosRequestConfig): Promise<any> {
    const authHeaders = getAuthHeaders(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      config.url!,
      JSON.stringify(config.data),
      this.secret
    );
    config.headers = { ...config.headers, ...authHeaders };
    return this.axios(config);
  }
}
