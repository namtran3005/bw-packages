import { ChainalysisApiClient } from '../client';

export abstract class Handler {
  protected client: ChainalysisApiClient;

  constructor(client: ChainalysisApiClient) {
    this.client = client;
  }
}
