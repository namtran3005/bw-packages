import { createHmac } from 'crypto';
import * as qs from 'querystring';
import axios, { Method } from 'axios';

export interface ConstructorParams {
  baseUrl: string;
  apiVersion: string;
  apiKey: string;
  apiPassphrase: string;
  apiSecret: string;
}

export class Api {
  public version: string;

  private key: string;
  private passphrase: string;
  private secret: string;
  private baseUrl: string;

  constructor(params: ConstructorParams) {
    this.key = params.apiKey;
    this.version = params.apiVersion;
    this.passphrase = params.apiPassphrase;
    this.secret = params.apiSecret;
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
    const path = this.buildPath(endpoint, newParams);
    const body = JSON.stringify(
      payload && Object.keys(payload).length ? payload : undefined
    );
    const timestamp = this.generateTimestamp();
    const message = `${timestamp}${method.toUpperCase()}${path}${body || ''}`;
    const signature = this.generateSignature(message);
    const headers = this.generateHeaders(timestamp, signature, path);

    return axios.request<Response>({
      url: this.buildUrl(endpoint, newParams),
      method,
      headers,
      ...(payload && Object.keys(payload).length ? { data: payload } : {}),
    });
  }

  private buildPath(path: string, params?: string) {
    return `/${this.version}${path}${
      params && params.length ? `?${params}` : ''
    }`;
  }

  private buildUrl(path: string, params?: string) {
    return `${this.baseUrl}${this.buildPath(path, params)}`;
  }

  private generateTimestamp() {
    return `${Math.floor(Date.now() / 1000)}`;
  }

  private generateSignature(message: string) {
    return createHmac('sha512', this.secret)
      .update(message)
      .digest('hex');
  }

  private generateHeaders(timestamp: string, signature: string, path: string) {
    return {
      'Content-Type': 'application/json',
      'X-UP-API-Key': this.key,
      'X-UP-API-Passphrase': this.passphrase,
      'X-UP-API-Timestamp': timestamp,
      'X-UP-API-Signature': signature,
      'X-UP-API-Signed-Path': path,
    };
  }
}
