import { Handler } from '../handler';
import { Asset, AssetLoose, Cluster, Rating } from '../../types';

export enum Network {
  Bitcoin = 'Bitcoin',
  Ethereum = 'Ethereum',
}

export interface TransferRegisterReceivedOptions {
  userId: string;
  bulkImport?: boolean;
  network: Network;
  asset: Asset;
  transferReference: string;
  transferTimestamp?: string;
  assetAmount?: number;
}

export interface TransferRegisterReceivedResponseEntry {
  transferReference: string;
  asset: AssetLoose;
  cluster: Cluster | null;
  rating: Rating;
}

export type TransferRegisterReceivedResponse =
  TransferRegisterReceivedResponseEntry[];

export interface TransferGetReceivedOptions {
  userId: string;
  limit?: number;
  offset?: number;
}

export interface TransferGetReceivedResponse {
  limit: number;
  offset: number;
  total: number;
  data: {
    asset: AssetLoose;
    transferReference: string;
    amount: number;
    amountUSD: number;
    timestamp: string;
    rating: Rating;
    cluster: Cluster | null;
  }[];
}

export type TransferRegisterSentOptions = Omit<
  TransferRegisterReceivedOptions,
  'bulkImport'
>;

/** Content-Length: 0 */
export type TransferRegisterSentResponse = '';

export type TransferGetSentOptions = TransferGetReceivedOptions;

export type TransferGetSentResponse = TransferGetReceivedResponse;

export class TransferHandler extends Handler {
  public async registerReceived(options: TransferRegisterReceivedOptions) {
    const { bulkImport, userId, ...payload } = options;

    return this.client.post<TransferRegisterReceivedResponse>(
      `users/${userId}/transfers/received${
        bulkImport ? '?bulkImport=true' : ''
      }`,
      [payload]
    );
  }

  public async getReceived(options: TransferGetReceivedOptions) {
    const { userId, ...params } = options;

    return this.client.get<TransferGetReceivedResponse>(
      `users/${userId}/transfers/received`,
      params
    );
  }

  public async registerSent(options: TransferRegisterSentOptions) {
    const { userId, ...payload } = options;

    return this.client.post<TransferRegisterSentResponse>(
      `users/${userId}/transfers/sent`,
      [payload]
    );
  }

  public async getSent(options: TransferGetSentOptions) {
    const { userId, ...params } = options;

    return this.client.get<TransferGetSentResponse>(
      `users/${userId}/transfers/sent`,
      params
    );
  }
}
