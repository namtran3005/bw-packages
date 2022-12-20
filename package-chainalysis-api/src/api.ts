import { ChainalysisApiClient } from './client';
import {
  AlertHandler,
  TransferHandler,
  UserHandler,
  WidthdrawalHandler,
} from './handlers';

export class ChainalysisApi {
  private readonly client: ChainalysisApiClient;
  public readonly alert: AlertHandler;
  public readonly transfer: TransferHandler;
  public readonly user: UserHandler;
  public readonly withdrawal: WidthdrawalHandler;

  constructor(params: ConstructorParameters<typeof ChainalysisApiClient>[0]) {
    this.client = new ChainalysisApiClient(params);
    this.alert = new AlertHandler(this.client);
    this.transfer = new TransferHandler(this.client);
    this.user = new UserHandler(this.client);
    this.withdrawal = new WidthdrawalHandler(this.client);
  }
}
