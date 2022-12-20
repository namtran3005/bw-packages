export enum Asset {
  ETH = 'ETH',
  BTC = 'BTC',
}

export type AssetLoose = Asset | string;

export interface Cluster {
  name: string;
  category: string;
}

export enum Rating {
  HighRisk = 'highRisk',
  LowRisk = 'lowRisk',
  Unknown = 'unknown',
}
