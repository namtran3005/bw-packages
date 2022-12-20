import * as yup from 'yup';
import {
  cardAuthorizationDeclineValidationSchema,
  cardAuthorizationResolutionValidationSchema,
  cardAuthorizationValidationSchema,
  Currencies,
  MoneyAmount,
} from '../../..';
import {
  CardAuthorizationDeclineReason,
  CardTransactionMetadata,
} from './cards';

export enum ReservationType {
  CARD_AUTHORIZATION = 'CARD_AUTHORIZATION',
  CARD_BLOCK = 'CARD_BLOCK',
  CARD_FRAUD_CASE_PENDING = 'CARD_FRAUD_CASE_PENDING',
  CARD_FRAUD_CASE_TIMEOUT = 'CARD_FRAUD_CASE_TIMEOUT',
  CARD_AUTHORIZATION_DECLINE = 'CARD_AUTHORIZATION_DECLINE',
  CARD_AUTHORIZATION_RESOLUTION = 'CARD_AUTHORIZATION_RESOLUTION',
  SCT_STATUS_UPDATE = 'SCT_STATUS_UPDATE',
}

export interface Reservation {
  solarisId: string;
  amount: MoneyAmount;
  reservationType: ReservationType;
  reference?: string;
  status: string;
  metaInfo: string;
  expiresAt: Date | null;
  expiredAt?: Date | null;
  resolvedAt?: Date | null;
  description?: string;
}

export enum CardAuthorizationStatus {
  OPEN = 'OPEN',
  RESOLVED = 'RESOLVED',
}

export interface CardAuthorizationPayloadParsed {
  solarisId: string;
  reservationType: ReservationType.CARD_AUTHORIZATION;
  reference: string;
  metaInfo: string;
  description: string;
  expiresAt: Date | null;
  resolvedAt: Date | null;
  status: CardAuthorizationStatus.OPEN;
  expiredAt: Date | null;
  partnerId: string;
  amount: MoneyAmount;
}

// TODO - expand the type (or remove it altogether) once the card authorization
// payload validation schema is expanded. See https://bitwala-gmbh.atlassian.net/browse/IT-3860

export type CardAuthorizationPayloadValidated = yup.InferType<
  typeof cardAuthorizationValidationSchema
>;

export type CardAuthorizationDeclineCardTransaction = Omit<
  CardTransactionMetadata,
  'amount' | 'originalAmount'
> & { amount: MoneyAmount; originalAmount: MoneyAmount };

// TODO - expand the type (or remove it altogether) once the card authorization
// payload validation schema is expanded. See https://bitwala-gmbh.atlassian.net/browse/IT-3860
export type CardAuthorizationDeclineCardTransactionValidated = Omit<
  CardAuthorizationDeclineCardTransaction,
  'status' | 'attemptedAt' | 'merchant' | 'amount' | 'originalAmount'
> & {
  merchant: { name: string };
  amount: { currency: Currencies; value: number };
};

export interface CardAuthorizationDeclinePayloadParsed {
  reason: CardAuthorizationDeclineReason;
  cardTransaction: CardAuthorizationDeclineCardTransaction;
}

export type CardAuthorizationDeclinePayloadValidated = yup.InferType<
  typeof cardAuthorizationDeclineValidationSchema
>;

export interface CardAuthorizationResolutionPayloadParsed
  extends Omit<CardAuthorizationPayloadParsed, 'status' | 'resolvedAt'> {
  resolvedAt: Date;
  status: CardAuthorizationStatus.RESOLVED;
  internalReference: string | null;
}

export type CardAuthorizationResolutionPayloadValidated = yup.InferType<
  typeof cardAuthorizationResolutionValidationSchema
>;
