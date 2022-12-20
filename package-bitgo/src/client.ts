import fetch from 'node-fetch';
// eslint-disable-next-line import/default
import queryString from 'query-string';
import { BitgoError } from './error';

interface BitgoWallet {
  id: string;
  balance: number;
  coin: AllowedCoins;
  balanceString: string;
  spendableBalance: number;
  spendableBalanceString: string;
  confirmedBalance: number;
  confirmedBalanceString: string;
}

interface BitgoTransfer {
  id: string;
  wallet: string;
  txid: string;
  state: string;
  coin: AllowedCoins;
}

interface DepositAddress {
  id: string;
  address: string;
  chain: DepositAddressType;
  wallet: string;
}

export interface BitgoOptions {
  /**
   * Access token used to authenticate with the bitgo api
   */
  accessToken: string;
  /**
   * Environment that will be used to call the bitgo api, can be 'test' (testnet) or 'production' (mainnet).
   */
  environment: 'production' | 'test';
}

type AllowedCoins = 'btc' | 'tbtc';

export enum DepositAddressType {
  P2SH = 0,
  'P2SH-P2WSH' = 10,
  P2WSH = 20,
}

export class Bitgo {
  private accessToken: string;
  private bitgoBaseUrl: string;

  constructor(options: BitgoOptions) {
    this.accessToken = options.accessToken;
    this.bitgoBaseUrl =
      options.environment === 'production'
        ? 'https://www.bitgo.com/api/v2'
        : 'https://test.bitgo.com/api/v2';
  }

  public async getWallet({
    coin,
    walletId,
  }: {
    coin: AllowedCoins;
    walletId: string;
  }): Promise<BitgoWallet> {
    return this.call({
      method: 'GET',
      url: `/${coin}/wallet/${walletId}`,
    });
  }

  public async getTransfers(
    {
      coin,
      walletId,
    }: {
      coin: AllowedCoins;
      walletId: string;
    },
    options?: { limit?: number }
  ): Promise<{
    coin: AllowedCoins;
    transfers: BitgoTransfer[];
  }> {
    // eslint-disable-next-line import/no-named-as-default-member
    const queryStringOptions = options ? queryString.stringify(options) : '';
    return this.call({
      method: 'GET',
      url: `/${coin}/wallet/${walletId}/transfer?${queryStringOptions}`,
    });
  }

  public async generateAddress({
    coin,
    walletId,
    type,
  }: {
    coin: AllowedCoins;
    walletId: string;
    type: DepositAddressType;
  }): Promise<DepositAddress> {
    return this.call({
      method: 'POST',
      url: `/${coin}/wallet/${walletId}/address`,
      body: JSON.stringify({
        chain: type,
      }),
    });
  }

  private async call({
    method,
    url,
    body,
  }: {
    method: 'GET' | 'POST';
    url: string;
    body?: string;
  }) {
    const res = await fetch(`${this.bitgoBaseUrl}${url}`, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    const data = await res.json();
    if (res.status !== 200) {
      throw new BitgoError({
        statusCode: res.status,
        error: data.error,
        name: data.name,
        requestId: data.requestId,
        context: data.context,
      });
    }
    return data;
  }
}
