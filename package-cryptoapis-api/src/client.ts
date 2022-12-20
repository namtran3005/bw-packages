import * as qs from 'querystring';
import axios, { Method } from 'axios';

export interface CryptoApisApiClientOptions {
  apiKey: string;
}

export class CryptoApisApiClient {
  public static readonly BASE_URL = 'https://rest.cryptoapis.io/v2';
  private readonly key: string;

  constructor(options: CryptoApisApiClientOptions) {
    this.key = options.apiKey;
  }

  public post<Response>(endpoint: string, payload?: object) {
    return this.request<Response>('post', endpoint, payload);
  }

  public get<Response>(endpoint: string, params?: object) {
    return this.request<Response>('get', endpoint, undefined, params);
  }

  public delete<Response>(endpoint: string, params?: object) {
    return this.request<Response>('delete', endpoint, undefined, params);
  }

  private request<Response>(
    method: Method,
    endpoint: string,
    payload?: object,
    params?: object
  ) {
    const newParams = params
      ? qs.stringify(params as qs.ParsedUrlQueryInput)
      : undefined;
    const headers = this.generateHeaders();
    const url = this.buildUrl(endpoint, newParams);

    return axios
      .request<Response>({
        url,
        method,
        headers,
        ...(payload && { data: payload || {} }),
      })
      .catch((error) => {
        if (!error.response) {
          throw error;
        }

        throw new Error(
          `Request \`${method} ${url}\` with headers (${JSON.stringify(
            headers
          )}) failed with status code ${
            error.response.status
          }. Received the following response: ${JSON.stringify(
            error.response.data
          )}`
        );
      });
  }

  private buildPath(path: string, params?: string) {
    return `/${path}${params && params.length ? `?${params}` : ''}`;
  }

  private buildUrl(path: string, params?: string) {
    return `${CryptoApisApiClient.BASE_URL}${this.buildPath(path, params)}`;
  }

  private generateHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-API-Key': this.key,
    };
  }
}
