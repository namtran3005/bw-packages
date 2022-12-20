import { MoneyAmount } from '../../misc/lib/money';

export enum AccountType {
  CHECKING_BUSINESS = 'CHECKING_BUSINESS',
  CHECKING_PERSONAL = 'CHECKING_PERSONAL',
}

export enum LockingStatus {
  NO_BLOCK = 'NO_BLOCK',
  CREDIT_BLOCK = 'CREDIT_BLOCK',
  DEBIT_BLOCK = 'DEBIT_BLOCK',
  BLOCK = 'BLOCK',
  COMPLIANCE_SCREENING = 'COMPLIANCE_SCREENING',
}

export enum LockingReason {
  AML_FOLLOW_UP_OVERDUE = 'AML_FOLLOW_UP_OVERDUE',
  COMPANY_FOUNDATION = 'COMPANY_FOUNDATION',
  COMPLIANCE = 'COMPLIANCE',
  COMPLIANCE_SCREENING = 'COMPLIANCE_SCREENING',
  COMPLIANCE_PARTNER = 'COMPLIANCE_PARTNER',
  CUSTOMER_WISH = 'CUSTOMER_WISH',
  DECOUPLED_CARD_DUNNING = 'DECOUPLED_CARD_DUNNING',
  DECOUPLED_CARD_TERMINATION = 'DECOUPLED_CARD_TERMINATION',
  IDENTIFICATION_FAILED = 'IDENTIFICATION_FAILED',
  IDENTIFICATION_DOCUMENT_EXPIRED = 'IDENTIFICATION_DOCUMENT_EXPIRED',
  IN_CLOSURE = 'IN_CLOSURE',
  INSOLVENCY = 'INSOLVENCY',
  LOAN_RESERVATION = 'LOAN_RESERVATION',
  MISSING_TAX_INFORMATION = 'MISSING_TAX_INFORMATION',
  OTHER = 'OTHER',
  SEIZURE = 'SEIZURE',
}

export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum ClosureReason {
  CUSTOMER_WISH = 'CUSTOMER_WISH',
  KYC_NOT_COMPLETED = 'KYC_NOT_COMPLETED',
  TAX_DATA_NOT_PROVIDED = 'TAX_DATA_NOT_PROVIDED',
  BUSINESS_RELATIONS_END = 'BUSINESS_RELATIONS_END',
  INSOLVENCY = 'INSOLVENCY',
  COMPLIANCE_REGULATORY = 'COMPLIANCE_REGULATORY',
  OTHER = 'OTHER',
}

export enum AutomaticAccountClosureReason {
  CUSTOMER_WISH = 'CUSTOMER_WISH'
}

export enum AutomaticAccountClosureStatuses {
  INITIATED = 'INITIATED',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export interface AccountInput {
  type: AccountType;
}

export interface ItemOfAccountsList extends AccountInput {
  solarisId: string;
  iban: string;
  bic: string;
  lockingStatus: LockingStatus;
  lockingReasons: LockingReason[];
  personId: string;
  closureReason?: ClosureReason;
  status?: AccountStatus;
}

export interface SeizureProtection {
  currentBlockedAmount: MoneyAmount;
  protectedAmount?: MoneyAmount;
  protectedAmountExpiring?: MoneyAmount;
  protectedAmountExpiringDate?: string;
}

export interface Account extends ItemOfAccountsList {
  balance: MoneyAmount;
  availableBalance: MoneyAmount;
  accountLimit: MoneyAmount;
  businessId?: string;
  createdAt: Date;
  seizureProtection?: SeizureProtection;
}

export interface AccountBalance {
  balance: MoneyAmount;
  availableBalance: MoneyAmount;
  seizureProtection?: SeizureProtection;
}

export type AccountWithoutBalance = Omit<
  Account,
  'balance' | 'availableBalance'
>;

export enum BlockingAccountReason {
  CUSTOMER_WISH = 'CUSTOMER_WISH',
}

export interface UpdateAccountInput {
  blockReasons: BlockingAccountReason[];
  personId: string;
  accountId: string;
  comment?: string;
}

export interface AutomaticAccountClosure {
  account_id: string;
  closure_reason: AutomaticAccountClosureReason;
}

export interface AutomaticAccountClosureSuccessfulResponse {
  solarisId: string;
  closureReason: AutomaticAccountClosureReason;
  status: AutomaticAccountClosureStatuses;
  accountId: string;
  technicalClosureDate?: string;
  payoutAllowed?: string;
  legalClosureDate: string;
  updatedAt: string;
}

export interface AutomaticAccountClosureFailedResponse {
  solarisId: string;
  status: string;
  code: string;
  title: string;
  details?: string;
}
