import { CryptoTaxApiClient } from '../client';

export abstract class Handler {
  protected client: CryptoTaxApiClient;

  constructor(client: CryptoTaxApiClient) {
    this.client = client;
  }
}
