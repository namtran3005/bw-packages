/* eslint-disable @typescript-eslint/no-explicit-any */

export enum CryptoTaxAPIStatuses {
  NEW = 'NEW',
  WARNING = 'WARNING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR',
}
export enum CryptoTaxRequestStatuses {
  INITIATED = 'initiated',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export enum CryptoTaxDocFormats {
  JSON = 'json',
  XLSX = 'xlsx',
  PDF = 'pdf',
}

export enum CryptoTaxCurrencies {
  EUR = 870,
  BTC = 343,
  ETH = 857,
}

export enum CryptoTaxCountries {
  DE = 'DE',
  INT = 'INT',
}

export enum CryptoTaxTradeTypes {
  trade = 'trade',
  deposit = 'deposit',
  withdrawal = 'withdrawal',
}

export enum CryptoTaxAdjustmentTypes {
  simple_withdrawal = 'simple_withdrawal',
  otcsell = 'otcsell',
  margin_trading_loss = 'margin_trading_loss',
  margin_trading_fee = 'margin_trading_fee',
  gift = 'gift',
  spending = 'spending',
  simple_deposit = 'simple_deposit',
  airdrop = 'airdrop',
  staking = 'staking',
  lending = 'lending',
  hardfork = 'hardfork',
  linkedwithdrawal = 'linkedwithdrawal',
  otcbuy = 'otcbuy',
  icoinflow = 'icoinflow',
  swap = 'swap',
  masternodes = 'masternodes',
  mining = 'mining',
  bounties = 'bounties',
  margin_trading_profit = 'margin_trading_profit',
  security_token_distribution = 'security_token_distribution',
}

export interface WarningOrError {
  type: string;
  message: string;
  data: WarningOrErrorData[];
}

export interface WarningOrErrorData {
  assetId: number;
  assetCode: string;
  exchange: string;
  account: string;
  date: Date;
  amount: number;
}

export interface TaxData {
  yearGain: YearGain;
  marginTrading: MarginTrading;
  otherIncome: OtherIncome;
}

export interface MarginTrading {
  profit: number;
  losses: number;
  fees: number;
  summary: number;
}

export interface OtherIncome {
  lending: number;
  staking: number;
  masternodes: number;
  mining: number;
  bounties: number;
  airdrop: number;
  total: number;
}

export interface YearGain {
  gain: number;
  win: number;
  loss: number;
  taxableGain: number;
  taxableWin: number;
  taxableLoss: number;
  taxableLongTermWin: number;
  taxableLongTermLoss: number;
}

export interface ReportData {
  taxYear: number;
  taxCountry: string;
  baseAsset: string;
  taxData: TaxData;
}

export interface CheckResultResponse {
  data: ReportData;
  errors: WarningOrError[];
  warnings: WarningOrError[];
  calculated: Date;
  requestId: string;
  taxReportUrl: string;
  format: CryptoTaxDocFormats;
  status: CryptoTaxAPIStatuses;
}

export interface Trade {
  transactionId: string;
  accountName: string;
  exchangeName: string;
  tradeDate: Date;
  type: CryptoTaxTradeTypes;
  buyAmount: string;
  buyAssetId: CryptoTaxCurrencies;
  sellAmount: string;
  sellAssetId: CryptoTaxCurrencies;
  adjustmentType?: CryptoTaxAdjustmentTypes;
  feeAmount: number;
  feeAssetId: CryptoTaxCurrencies;
}

export interface ReportCalculationResponse {
  requestCreated: string;
  requestId: string;
}

export type AccountName = 'Nuri';
export type ExchangeName = 'Nuri';

export interface CryptoTaxTrade {
  transactionId: string;
  accountName: AccountName;
  exchangeName: ExchangeName;
  tradeDate: Date;
  type: CryptoTaxTradeTypes;
  buyAmount?: number;
  buyAssetId?: CryptoTaxCurrencies;
  sellAmount?: number;
  sellAssetId?: CryptoTaxCurrencies;
  feeAmount?: number;
  feeAssetId?: CryptoTaxCurrencies;
  adjustmentType?: CryptoTaxAdjustmentTypes;
}
