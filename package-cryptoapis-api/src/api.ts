import { CryptoApisApiClient } from './client';
import { BlockchainDataHandler, BlockchainEventsHandler } from './handlers';

export type CryptoApisApiOptions = ConstructorParameters<
  typeof CryptoApisApiClient
>[0] & {
  callback: {
    url: string;
    secretKey: string;
  };
};

export class CryptoApisApi {
  private readonly client: CryptoApisApiClient;
  public readonly blockchainData: BlockchainDataHandler;
  public readonly blockchainEvents: BlockchainEventsHandler;

  constructor(options: CryptoApisApiOptions) {
    this.client = new CryptoApisApiClient(options);
    this.blockchainData = new BlockchainDataHandler(this.client);
    this.blockchainEvents = new BlockchainEventsHandler(this.client, {
      callback: options.callback,
    });
  }
}
