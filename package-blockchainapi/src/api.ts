import { BlockchainApiClient } from './client';
import { StatsHandler } from './handlers';

export interface ConstructorParams {
  baseUrl: string;
}

export class BlockchainApi {
  private client: BlockchainApiClient;
  public stats: StatsHandler;

  constructor(params: ConstructorParams) {
    this.client = new BlockchainApiClient(params);
    this.stats = new StatsHandler(this.client);
  }
}
