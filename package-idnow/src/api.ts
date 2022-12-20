import { Identifications } from './lib/identifications';

export class IdNow {
  public identifications: Identifications;

  constructor() {
    this.identifications = new Identifications();
  }
}
