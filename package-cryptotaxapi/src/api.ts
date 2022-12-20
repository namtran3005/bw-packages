import { CryptoTaxApiClient } from './client';
import { TaxReportHandler } from './handlers';

export interface ConstructorParams {
  baseUrl: string;
  apiVersion: string;
  apiKey: string;
}

export class CryptoTaxApi {
  public taxReport: TaxReportHandler;

  private client: CryptoTaxApiClient;

  constructor(params: ConstructorParams) {
    this.client = new CryptoTaxApiClient(params);

    this.taxReport = new TaxReportHandler(this.client);
  }
}
