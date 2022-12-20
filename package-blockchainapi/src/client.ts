import * as qs from 'querystring';
import axios, { Method } from 'axios';

export interface ConstructorParams {
  baseUrl: string;
}

export class BlockchainApiClient {
  private baseUrl: string;

  constructor(params: ConstructorParams) {
    this.baseUrl = params.baseUrl;
  }

  public post<Response>(endpoint: string, payload?: object) {
    return this.request<Response>('post', endpoint, payload);
  }

  public get<Response>(endpoint: string, params?: object) {
    return this.request<Response>('get', endpoint, undefined, params);
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

    return axios.request<Response>({
      url,
      method,
      headers,
      ...(payload && { data: payload || {} }),
    });
  }

  private buildPath(path: string, params?: string) {
    return `/${path}${params && params.length ? `?${params}` : ''}`;
  }

  private buildUrl(path: string, params?: string) {
    return `${this.baseUrl}${this.buildPath(path, params)}`;
  }

  private generateHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }
}
