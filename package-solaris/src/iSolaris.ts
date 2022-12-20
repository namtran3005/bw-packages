import { AxiosRequestConfig } from 'axios';

export interface ClientCreds {
    url: string;
    clientId: string;
    clientSecret: string;
    apiVersion: string;
  }

export interface ISolaris {
  call(config: AxiosRequestConfig): Promise<any>;

  get(config: AxiosRequestConfig): Promise<any>;

  post(config: AxiosRequestConfig): Promise<any>;

  patch(config: AxiosRequestConfig): Promise<any>;

  put(config: AxiosRequestConfig): Promise<any>;

  delete(config: AxiosRequestConfig): Promise<any>;
}
