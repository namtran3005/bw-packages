import { CurrencyPair } from '../../types';

export interface ClientCredentials {
  url: string;
  apiKey: string;
}

export interface FeeConfigRecord {
  id: string;
  pair: CurrencyPair;
  bitwalaFee: number;
  networkFee: number;
  feeOptionName: string;
  minimumBitwalaFee: number;
  minimumBitwalaFeeApplies: boolean;
  active?: boolean;
  setAt: Date;
  updatedAt: Date;
}
