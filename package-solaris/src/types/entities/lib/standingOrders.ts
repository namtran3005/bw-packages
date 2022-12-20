import { MoneyAmount } from '../../misc/lib/money';

export enum Reoccurrence {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  EVERY_SIX_MONTHS = 'EVERY_SIX_MONTHS',
  ANNUALLY = 'ANNUALLY',
}

export enum StandingOrderTransactionType {
  CREDIT_CLEARING_TRANSACTION = 'CREDIT_CLEARING_TRANSACTION',
  SEPA_CREDIT_TRANSACTION = 'SEPA_CREDIT_TRANSACTION',
}

export enum StandingOrderBookingType {
  B2C_CRYPTO_EXCHANGE_BTC = "B2C_CRYPTO_EXCHANGE_BTC",
  B2C_CRYPTO_EXCHANGE_ETH = "B2C_CRYPTO_EXCHANGE_ETH",
  B2C_SAVING_POTS_FGP = "B2C_SAVING_POTS_FGP",
  B2C_SAVING_POTS_PFT = "B2C_SAVING_POTS_PFT",
  B2C_SAVING_POTS_PVP = "B2C_SAVING_POTS_PVP",
}

export enum StandingOrderClearingTransactionDeclinedReason {
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  GENERAL = 'GENERAL',
}

export enum SepaScheduledTransactionDeclinedReasons {
  INSUFFICIENT_FUNDS = 'There were insufficient funds to complete this action.',
}

export interface StandingOrderInput {
  recipientName: string;
  recipientIban: string;
  recipientBic?: string;
  reference?: string;
  amount: MoneyAmount;
  description?: string;
  firstExecutionDate: string;
  lastExecutionDate: string;
  reoccurrence: Reoccurrence;
  endToEndId?: string;
  monthEndExecution: boolean;
}
export interface AutoBuyStandingOrderInput {
  reference?: string;
  amount: MoneyAmount;
  description?: string;
  firstExecutionDate: string;
  lastExecutionDate?: string;
  reoccurrence: Reoccurrence;
  endToEndId?: string;
  monthEndExecution: boolean;
  clearingProfileId: string;
  bookingType: StandingOrderBookingType;
  transactionType: StandingOrderTransactionType.CREDIT_CLEARING_TRANSACTION;
}
export type CreateStandingOrderRequest =
  | StandingOrderInput
  | AutoBuyStandingOrderInput;
export interface UpdateStandingOrderInput {
  solarisStandingOrderId: string;
  amount?: Pick<MoneyAmount, 'value'>;
  description?: string;
  lastExecutionDate?: string;
  reoccurrence?: Reoccurrence;
  endToEndId?: string;
  monthEndExecution: boolean;
}

export enum StandingOrderStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CANCELED = 'CANCELED',
}

export interface StandingOrder extends StandingOrderInput {
  solarisId: string;
  nextOccurrence: string | null;
  status: StandingOrderStatus;
}

export interface StandingOrderPatch {
  solarisStandingOrderId: string;
  amount?: {
    value: number;
  };
  description?: string;
  lastExecutionDate?: string;
  reoccurrence?: Reoccurrence;
  endToEndId?: string;
}

export interface StandingOrderClearingTransaction {
  id: string;
  status: string;
  accountId: string;
  accountIban: string;
  clearingAccountIban: string;
  amount: {
    value: number;
    unit: string;
    currency: string;
  };
  description: string;
  bookingType: string;
  valutaDate: string;
  transactionType: string;
  reference: string;
}
