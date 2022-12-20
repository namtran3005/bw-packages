import https from 'https';
import { AxiosResponse } from 'axios';
import {
  CryptoTaxCurrencies,
  CryptoTaxDocFormats,
  CheckResultResponse,
  ReportCalculationResponse,
  CryptoTaxCountries,
  CryptoTaxTrade,
} from '../../types';
import { Handler } from '../handler';

export class TaxReportHandler extends Handler {
  public create = (
    year: number,
    trades: CryptoTaxTrade[],
    taxCountryCode: CryptoTaxCountries
  ): Promise<AxiosResponse<ReportCalculationResponse>> => {
    const body = {
      baseAssetId: CryptoTaxCurrencies.EUR,
      format: CryptoTaxDocFormats.PDF,
      taxCountryCode,
      taxYear: year,
      trades,
    };

    return this.client.post<ReportCalculationResponse>(
      'requestReportCalculation',
      body
    );
  };

  public fetch = async (
    requestId: string
  ): Promise<AxiosResponse<CheckResultResponse>> => {
    return this.client.get<CheckResultResponse>('checkResult', {
      request_id: requestId,
    });
  };

  public getFileString = async (url: string): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
      https
        .get(url, (res) => {
          const chunks: Uint8Array[] = [];
          res.on('data', (chunk) => {
            chunks.push(chunk);
          });

          res.on('end', () => {
            const jsfile = Buffer.concat(chunks).toString('base64');
            resolve(jsfile);
          });
        })
        .on('error', (e) => {
          reject(e);
        });
    });
  };
}
