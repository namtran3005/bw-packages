import * as humps from 'humps';
import { Api } from './api';
import { Network, Protocol } from './types/eth';

export interface ConstructorParams {
  api: Api;
  network: Network;
  walletTransfersCallbackUrl: string;
}

interface SubscribeToWalletTransfersResponse {
  id: string; // webhook id
  url: string; // callback url
  name: string | null; // webhook name
  hmac_secret_key: string;
  headers: object | null; // headers that we want to have, are described in subscription request
  version: string;
  status: 'ACTIVE';
  event_filters: Array<{
    event_noun: 'transfer';
    event_verb: 'observed';
    protocol_name: Protocol;
    wallet_address: string;
    max_confirmations: null;
    limit_to_application: false;
  }>;
  path: string; // callback path (without host part of url)
}

export class Webhooks {
  private api: Api;
  private protocol: Protocol;
  private walletTransfersCallbackUrl: string;

  constructor(params: ConstructorParams) {
    this.api = params.api;
    this.protocol =
      params.network === Network.MAINNET ? Protocol.ETHEREUM : Protocol.ROPSTEN;
    this.walletTransfersCallbackUrl = params.walletTransfersCallbackUrl;
  }

  /**
   * Trigger's URL host verification handshake.
   */
  public verifyHost(host: string) {
    return this.api.post<void>('/tenancy/webhooks-verify/', {
      verify_url: host,
    });
  }

  public subscribeToWalletTransfers(
    walletAddress: string,
    hmacSecretKey: string
  ) {
    const payload = {
      url: this.walletTransfersCallbackUrl,
      hmac_secret_key: hmacSecretKey,
      version: this.api.version,
      status: 'ACTIVE',
      event_filters: [
        {
          protocol_name: this.protocol,
          event_noun: 'transfer',
          limit_to_application: false,
          wallet_address: walletAddress,
        },
      ],
    };

    return this.api.post<SubscribeToWalletTransfersResponse>(
      '/tenancy/webhooks/',
      payload
    );
  }
  public parseWebhookBody(body: object) {
    return humps.camelizeKeys(body);
  }
}
