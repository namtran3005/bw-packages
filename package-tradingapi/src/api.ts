import { TradingCoreApiClient } from './client';
import { QuotesHandler } from './handlers';

export interface ConstructorParams {
  baseUrl: string;
  apiVersion: string;
  apiKey: string;
}

export class TradingCoreApi {
  public quotes: QuotesHandler;

  private client: TradingCoreApiClient;

  constructor(params: ConstructorParams) {
    this.client = new TradingCoreApiClient(params);

    this.quotes = new QuotesHandler(this.client);
  }
}
