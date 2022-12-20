import { Handler } from '../handler';
import { Asset, AssetLoose, Cluster, Rating } from '../../types';

export interface CustomAddress {
  addressName: string;
  description: string;
  categoryName: string;
}

export type ChainalysisIdentification = CustomAddress;

export interface WithdrawalRegisterAddressOptions {
  userId: string;
  bulkImport?: boolean;
  asset: Asset;
  address: string;
}

export interface WithdrawalRegisterAddressResponseEntry {
  asset: AssetLoose;
  address: string;
  cluster: Cluster | null;
  rating: Rating;
  customAddress: CustomAddress | null;
  chainalysisIdentification: ChainalysisIdentification | null;
}

export type WithdrawalRegisterAddressResponse =
  WithdrawalRegisterAddressResponseEntry[];

export interface WithdrawalGetAddressOptions {
  userId: string;
  limit?: number;
  offset?: number;
}

export interface WithdrawalGetAddressResponse {
  limit: number;
  offset: number;
  total: number;
  data: {
    asset: AssetLoose;
    cluster: Cluster | null;
    customAddress: CustomAddress | null;
    chainalysisIdentification: ChainalysisIdentification | null;
    rating: Rating;
  }[];
}

export interface WithdrawalDeleteAddressOptions {
  userId: string;
  asset: Asset;
  address: string;
}

export class WidthdrawalHandler extends Handler {
  public async registerAddress(options: WithdrawalRegisterAddressOptions) {
    const { bulkImport, userId, ...payload } = options;

    return this.client.post<WithdrawalRegisterAddressResponse>(
      `users/${userId}/withdrawaladdresses${
        bulkImport ? '?bulkImport=true' : ''
      }`,
      [payload]
    );
  }

  public async getAddress(options: WithdrawalGetAddressOptions) {
    const { userId, ...params } = options;

    return this.client.get<WithdrawalGetAddressResponse>(
      `users/${userId}/withdrawaladdresses`,
      params
    );
  }

  public async deleteAddress(options: WithdrawalDeleteAddressOptions) {
    return this.client.delete<null>(
      `users/${options.userId}/withdrawaladdresses/${options.asset}/${options.address}`
    );
  }
}
