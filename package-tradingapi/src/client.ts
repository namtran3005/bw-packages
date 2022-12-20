import { URL, URLSearchParams } from 'url';
import Path from 'path';
import fetch, { Response } from 'node-fetch';
import { Method, Body, ConstructorParams, Payload } from './types';

export class TradingCoreApiClient {
  private version: string;
  private key: string;
  private baseUrl: string;

  constructor(params: ConstructorParams) {
    this.key = params.apiKey;
    this.baseUrl = params.baseUrl;
    this.version = params.apiVersion;
  }

  public post<T>(endpoint: string, payload?: Payload) {
    const newUrl = this.buildUrl(endpoint);
    const body = this.generateBody({ payload });
    return this.request<T>(Method.POST, newUrl, body);
  }

  public get<T>(endpoint: string, params?: object) {
    const newUrl = this.buildUrl(endpoint, params);
    return this.request<T>(Method.GET, newUrl);
  }

  private async request<T>(method: Method, requestUrl: URL, body?: Body) {
    const headers = this.generateHeaders();

    const res: Response = await fetch(requestUrl, {
      method,
      headers,
      ...(body && { body }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<T>;
  }

  private buildUrl(path: string, params?: object) {
    const requestUrl = new URL(this.baseUrl);
    requestUrl.search = this.generateParams(params).toString();
    requestUrl.pathname = Path.join('api', this.version, path);
    return requestUrl;
  }

  private generateBody({
    payload,
    params,
  }: {
    payload?: Payload;
    params?: object;
  }) {
    let body = null;
    if (params) {
      body = this.generateParams(params);
    } else if (payload) {
      body = JSON.stringify(payload);
    }
    return body;
  }

  private generateParams(paramsObj?: object) {
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(paramsObj || {})) {
      params.append(k, v);
    }
    return params;
  }

  private generateHeaders() {
    return {
      'x-api-key': this.key,
      userAgent: 'bitwala-main',
      'Content-Type': 'application/json',
    };
  }
}
