import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { logger } from '@bitwala-cryptobank-squad/package-logger';
import {
  CoinfirmOptions,
  CoinfirmBasicAMLReport,
  CoinfirmFullAMLReport,
} from './types';

const log = logger('GET_AML_REPORT');

/**
 * A wrapper for Coinfirm API to get an AML report
 * Default report type is 'basic' because
 * 'standard' and 'full' reports are pretty expensive
 */
export default class Coinfirm {
  private client: AxiosInstance;

  constructor(options: CoinfirmOptions) {
    if ((options && !options.apiUrl) || !options.apiToken) {
      log.error('API Url and Token should be provided.');
      throw new Error('API Url and Token should be provided.');
    }
    this.client = axios.create({
      timeout: options.timeout || 400000,
      baseURL: `${options.apiUrl}/${options.apiVersion || 'v3'}/reports/aml`,
      headers: {
        Authorization: `Bearer ${options.apiToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json, application/pdf',
      },
    });
  }

  public async getAMLReportFull(
    address: string
  ): Promise<CoinfirmFullAMLReport> {
    return this.client
      .get(`full/${address}`)
      .then(({ data }: AxiosResponse): CoinfirmFullAMLReport => data);
  }

  public async getAMLReportBasic(
    address: string
  ): Promise<CoinfirmBasicAMLReport> {
    return this.client
      .get(`basic/${address}`)
      .then(({ data }: AxiosResponse): CoinfirmBasicAMLReport => data);
  }

  public async getAMLReportPDF(reportId: string): Promise<Buffer> {
    return this.client
      .get(`${reportId}/pdf`, {
        responseType: 'arraybuffer',
      })
      .then(({ data }: AxiosResponse) => data);
  }
}

export * from './types';
