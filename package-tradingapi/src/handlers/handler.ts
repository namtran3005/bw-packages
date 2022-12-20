import { TradingCoreApiClient } from '../client';

export abstract class Handler {
  protected client: TradingCoreApiClient;

  constructor(client: TradingCoreApiClient) {
    this.client = client;
  }
}
