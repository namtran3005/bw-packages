export enum Blockchain {
  Bitcoin = 'bitcoin',
  Ethereum = 'ethereum',
}

export type BlockchainLoose = Blockchain | string;

export enum Network {
  Mainnet = 'mainnet',
  Testnet = 'testnet',
  Ropsten = 'ropsten',
  Mordor = 'mordor',
  Goerli = 'goerli'
}

export interface Balance {
  amount: string;
  unit: string;
}

export interface Actor {
  address: string;
  amount: string;
}

export interface GeneralResponse {
  apiVersion: string;
  requestId: string;
  context?: string;
}

export interface SingleItemResponse<Item> extends GeneralResponse {
  data: {
    item: Item;
  };
}

export interface ListResponse<Item> extends GeneralResponse {
  data: {
    limit: number;
    offset: number;
    total: number;
    items: Item[];
  };
}

export interface CallbackResponse {
  apiVersion: string;
  referenceId: string;
  idempotencyKey: string;
  data: {
    product: string;
    event: string;
    item: Record<string, unknown>;
  };
}
