import { MoneyAmount, Countries } from '../../misc';

export enum SeizureType {
  ATTACHMENT = 'ATTACHMENT',
  COURT_SEIZURE = 'COURT_SEIZURE',
  PRE_ATTACHMENT = 'PRE_ATTACHMENT',
  AUTHORITY_SEIZURE = 'AUTHORITY_SEIZURE',
}

export enum SeizureStatus {
  ACTIVE = 'ACTIVE',
  FULFILLED = 'FULFILLED',
}

export enum SeizureCustomerType {
  PERSON = 'Person',
  BUSINESS = 'Business',
}

export interface DebtorInformation {
  name?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  country?: Countries | null;
  state?: string;
}

export interface CreditorInformation extends DebtorInformation {
  iban?: string;
}

export interface CreditorRepresentative extends CreditorInformation {
  caseNumber?: string;
}

export interface Seizure {
  solarisId: string;
  enactmentDate: string;
  deliveryDate: string;
  authorityName?: string;
  resolutionCaseNumber?: string;
  seizureType: SeizureType;
  status: SeizureStatus;
  amount: MoneyAmount;
  additionalCost?: MoneyAmount;
  debtor?: DebtorInformation;
  creditor?: CreditorInformation;
  creditorRepresentative?: CreditorRepresentative;
  customerId?: string;
  customerType?: SeizureCustomerType;
  automaticPayoutDate?: string;
  insolvency?: boolean;
  seizureProtected?: boolean;
  automated?: boolean;
  socialBenefits?: boolean;
  country?: string;
  multipleDrittschuldner?: boolean;
}
