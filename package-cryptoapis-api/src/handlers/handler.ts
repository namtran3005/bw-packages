import { CryptoApisApiClient } from '../client';

export abstract class Handler {
  protected client: CryptoApisApiClient;

  constructor(client: CryptoApisApiClient) {
    this.client = client;
  }
}
