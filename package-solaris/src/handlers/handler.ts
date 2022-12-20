import { ISolaris } from '../iSolaris';

export abstract class Handler {
  protected client: ISolaris;

  constructor(client: ISolaris) {
    this.client = client;
  }
}
