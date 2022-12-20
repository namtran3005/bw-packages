import { Client } from '@nuri/node-fetch';

import { FeeConfigsHandler } from "./lib/feeConfigs";
import { ClientCredentials } from "./types";

export class TradingCore {
  public feeConfigs: FeeConfigsHandler;

  private client: Client;



  constructor({ url, apiKey }: ClientCredentials) {
    this.client = new Client(
      {
        url: url,
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      },
      {
        snakeCasedApi: true,
      },
    );


    this.feeConfigs = new FeeConfigsHandler(this.client);
  }
}
