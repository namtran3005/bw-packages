import { Webhooks, ConstructorParams as WebhooksParams } from './webhooks';
import {
  HistoricalData,
  ConstructorParams as HistoricalDataParams,
} from './historicalData';
import { Api, ConstructorParams as ApiParams } from './api';

type OmitApi<T> = Omit<T, 'api'>;

type ConstructorParams = ApiParams &
  OmitApi<WebhooksParams> &
  OmitApi<HistoricalDataParams>;

export class Upvest {
  public webhooks: Webhooks;
  public historicalData: HistoricalData;

  constructor(params: ConstructorParams) {
    const { network, walletTransfersCallbackUrl, ...apiParams } = params;
    const api = new Api(apiParams);

    this.webhooks = new Webhooks({ api, network, walletTransfersCallbackUrl });
    this.historicalData = new HistoricalData({ api, network });
  }
}
