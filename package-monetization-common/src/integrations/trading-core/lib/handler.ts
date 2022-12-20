import { Client } from '@nuri/node-fetch';

export abstract class Handler {
  protected client: Client;

  constructor(client: Client) {
    this.client = client;
  }

}
