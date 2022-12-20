import { BlockchainApiClient } from '../client';

export abstract class Handler {
  protected client: BlockchainApiClient;

  constructor(client: BlockchainApiClient) {
    this.client = client;
  }
}
