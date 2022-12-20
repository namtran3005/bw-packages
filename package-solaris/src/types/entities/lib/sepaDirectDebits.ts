import { MoneyAmount } from '../../misc/lib/money';

export enum Scheme {
  B2B = 'B2B',
  CORE = 'CORE',
}

export enum SequenceType {
  ONE_OFF = 'ONE_OFF',
  RECURRING = 'RECURRING',
}

export interface Mandate {
  reference: string;
  creditorIdentifier: string;
  scheme: Scheme;
  sequenceType: SequenceType;
  signatureDate: Date;
  debtorName: string;
  debtorIban: string;
  debtorBic: string;
}

export enum SepaDirectDebitStatus {
  CREATED = 'created',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
  EXECUTED = 'executed',
  REVIEW_NEEDED = 'review_needed',
}

export interface SepaDirectDebitInput {
  reference: string;
  amount: MoneyAmount;
  description?: string;
  collectionDate: Date;
  mandate: Mandate;
  endToEndId?: string;
}

export interface SepaDirectDebit extends SepaDirectDebitInput {
  solarisId: string;
  status: SepaDirectDebitStatus;
}
