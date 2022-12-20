import * as yup from 'yup';
import {
  cardLifeCycleEventValidationSchema,
  scaChallengeValidationSchema
} from '../../..';
import { IdentificationMethod, IdNowStatus } from './identifications';
import { Booking } from './bookings';
import { LockingStatus, AutomaticAccountClosureSuccessfulResponse } from './accounts';
import { TimedOrderStatus } from './timedOrders';
import { Seizure, SeizureCustomerType } from './seizures';
import { CardRepresentation, CardType } from './cards';

export enum EventType {
  IDENTIFICATION = 'IDENTIFICATION',
  BUSINESS_IDENTIFICATION = 'BUSINESS_IDENTIFICATION',
  ACCOUNT_BLOCK = 'ACCOUNT_BLOCK',
  ACCOUNT_CLOSURE = 'ACCOUNT_CLOSURE',
  BOOKING = 'BOOKING',
  SEPA_TIMED_ORDER = 'SEPA_TIMED_ORDER',
  SEPA_SCHEDULED_TRANSACTION = 'SEPA_SCHEDULED_TRANSACTION',
  LEGAL_REPRESENTATIVE = 'LEGAL_REPRESENTATIVE',
  PERSON_CHANGED = 'PERSON_CHANGED',
  PERSON_DELETED = 'PERSON_DELETED',
  PERSON_MOBILE_NUMBER_CREATED = 'PERSON_MOBILE_NUMBER_CREATED',
  PERSON_TAX_IDENTIFICATION_CHANGED = 'PERSON_TAX_IDENTIFICATION_CHANGED',
  BUSINESS_CHANGED = 'BUSINESS_CHANGED',
  BUSINESS_TAX_IDENTIFICATION_CHANGED = 'BUSINESS_TAX_IDENTIFICATION_CHANGED',
  RESERVATION_AND_CARD_STATUS_CHANGES = 'RESERVATION_AND_CARD_STATUS_CHANGES',
  PERSON_SEIZURE_CREATED = 'PERSON_SEIZURE_CREATED',
  PERSON_SEIZURE_DELETED = 'PERSON_SEIZURE_DELETED',
  PERSON_SEIZURE_UPDATED = 'PERSON_SEIZURE_UPDATED',
  PERSON_SEIZURE_FULFILLED = 'PERSON_SEIZURE_FULFILLED',
  CARD_FRAUD_CASE_PENDING = 'CARD_FRAUD_CASE_PENDING',
  CARD_FRAUD_CASE_TIMEOUT = 'CARD_FRAUD_CASE_TIMEOUT',
  SCA_CHALLENGE = 'SCA_CHALLENGE',
  CARD_AUTHORIZATION = 'CARD_AUTHORIZATION',
  CARD_AUTHORIZATION_DECLINE = 'CARD_AUTHORIZATION_DECLINE',
  CARD_AUTHORIZATION_RESOLUTION = 'CARD_AUTHORIZATION_RESOLUTION',
  CARD_LIFECYCLE_EVENT = 'CARD_LIFECYCLE_EVENT',
  POSTBOX_ITEM_CREATED = 'POSTBOX_ITEM_CREATED',
  ACCOUNT_CLOSURE_REQUEST = 'ACCOUNT_CLOSURE_REQUEST'
}

export interface SolarisWebhook {
  solarisId: string;
  eventType: EventType;
  url: string;
}

export interface SolarisWebhookCreationResponse extends SolarisWebhook {
  secret: string;
}

export interface SolarisWebhookMetadata {
  'Solaris-Webhook-Id': string;
  'Solaris-Webhook-Subscription-Id': string;
  'Solaris-Webhook-Event-Type': string;
  'Solaris-Entity-Id': string;
  'Solaris-Webhook-Attempt': string;
  'Solaris-Webhook-Signature': string;
}

export interface IdentificationEvent {
  solarisId: string;
  method: IdentificationMethod;
  reference: string;
  url: string | null;
  completedAt: Date | null;
  status: IdNowStatus;
  personId: string;
}

export interface BusinessIdentificationEvent {
  solarisId: string;
  reference: string;
  businessId: string;
  status: IdNowStatus;
  completedAt: Date | null;
}

export interface BookingEvent extends Booking {
  accountId: string;
}

export interface AccountBlockEvent {
  accountId: string;
  personId?: string;
  businessId?: string;
  lockingStatus: LockingStatus;
  updatedAt: Date;
  iban: string;
}

export interface AccountClosureEvent {
  accountId: string;
  personId?: string;
  businessId?: string;
  iban: string;
}

export interface SepaTimedOrderEvent {
  solarisId: string;
  reference: string;
  status: TimedOrderStatus;
  accountId: string;
  processedAt: Date;
}

export interface LegalRepresentativeEvent {
  solarisId: string;
  legalRepresentativeId: string;
  legalRepresentativeType: string;
  businessId: string;
  validUntil: Date;
}

export enum SepaScheduledTransactionEventStatus {
  ACCEPTED = 'ACCEPTED',
  EXECUTED = 'EXECUTED',
  DECLINED = 'DECLINED',
}

export interface SepaScheduledTransactionEvent {
  solarisId: string;
  accountId: string;
  processedAt: Date;
  reference: string;
  source: string;
  sourceId: string;
  status: SepaScheduledTransactionEventStatus;
  transactionId: string;
  declinedReason: string | null;
}

export interface SeizureCreatedOrDeletedEvent extends Seizure {
  customerId: string;
  customerType: SeizureCustomerType;
}

/** yup.InferType shows properties as required even if they are not required in yup schema, hence a workaround */

export type ScaChallengeEvent = Omit<
  (yup.InferType<
    typeof scaChallengeValidationSchema
  >),
  'merchant'
> & {
  merchant: {
    name: string;
    country: string;
    url?: string
  }
}

export type SolarisWebhookPayload =
  | IdentificationEvent
  | BusinessIdentificationEvent
  | BookingEvent
  | AccountBlockEvent
  | AccountClosureEvent
  | SepaTimedOrderEvent
  | LegalRepresentativeEvent
  | SepaScheduledTransactionEvent
  | SeizureCreatedOrDeletedEvent
  | ScaChallengeEvent;

export interface CardLifeCyclePayloadParsed {
  solarisId: string;
  status: string;
  reference: string;
  type: CardType;
  expirationDate: string;
  personId: string;
  accountId: string;
  businessId: string | null;
  representation: CardRepresentation;
  siaAccountNumber: string;
}

export type CardLifeCyclePayloadValidated = yup.InferType<
  typeof cardLifeCycleEventValidationSchema
>;

export type automaticAccountClosureRequestValidated =
Omit<AutomaticAccountClosureSuccessfulResponse, 'updatedAt'>