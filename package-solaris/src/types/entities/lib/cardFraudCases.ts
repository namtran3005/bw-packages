import * as yup from 'yup';
import {
  cardFraudCasePendingValidationSchema,
  cardFraudCaseTimeoutValidationSchema,
} from '../../..';
import { MoneyAmount } from '../../misc';
import { CardTransactionMetadata } from './cards';

export enum CardFraudCaseTransactionStatus {
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
}

export enum CardFraudCaseResolution {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  WHITELISTED = 'WHITELISTED',
  TIMEOUT = 'TIMEOUT',
}

export interface CardFraudCase {
  solarisId: string;
  resolution: CardFraudCaseResolution;
  respondUntil: Date;
  whitelistedUntil?: Date;
  cardTransaction: CardTransactionMetadata & {
    status: CardFraudCaseTransactionStatus;
    amount: MoneyAmount;
    originalAmount: MoneyAmount;
  };
}

export interface CardFraudCasePendingCardTransaction
  extends Omit<
    CardTransactionMetadata,
    'status' | 'amount' | 'originalAmount'
  > {
  status: CardFraudCaseTransactionStatus.DECLINED;
  amount: MoneyAmount;
  originalAmount: Omit<MoneyAmount, 'unit'> & { unit?: string };
}
export interface CardFraudCasePendingPayloadParsed {
  solarisId: string;
  resolution: CardFraudCaseResolution.PENDING;
  respondUntil: Date;
  whitelistedUntil: Date | null;
  cardTransaction: CardFraudCasePendingCardTransaction;
}

export type CardFraudCasePendingPayloadValidated = yup.InferType<
  typeof cardFraudCasePendingValidationSchema
>;

export interface CardFraudCaseTimeoutPayloadParsed
  extends Omit<CardFraudCasePendingCardTransaction, 'resolution'> {
  resolution: CardFraudCaseResolution.TIMEOUT;
}

export type CardFraudCaseTimeoutPayloadValidated = yup.InferType<
  typeof cardFraudCaseTimeoutValidationSchema
>;
