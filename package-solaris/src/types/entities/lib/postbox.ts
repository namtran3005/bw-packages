export enum PostboxOwnerType {
  PERSON = 'Person',
  BUSINESS = 'Business',
}

export enum PostboxType {
  ACCOUNT_STATEMENT = 'ACCOUNT_STATEMENT',
  BALANCE_CONFIRMATION = 'BALANCE_CONFIRMATION',
  CUSTOMER_INFORMATION = 'CUSTOMER_INFORMATION',
  DUNNING_INFORMATION = 'DUNNING_INFORMATION',
  LOAN_SCHEDULE = 'LOAN_SCHEDULE',
  SECURITIES_INVOICE = 'SECURITIES_INVOICE',
  SECURITIES_EVENT = 'SECURITIES_EVENT',
  SECURITIES_EVENT_NOTIFICATION = 'SECURITIES_EVENT_NOTIFICATION',
  DEPOT_STATEMENT_MIFID = 'DEPOT_STATEMENT_MIFID',
  EX_POST_COST_INFORMATION = 'EX_POST_COST_INFORMATION',
  DEPOT_STATEMENT = 'DEPOT_STATEMENT',
  ASSETS_ACQUISITION = 'ASSETS_ACQUISITION',
  ASSETS_ACQUISITION_COSTS = 'ASSETS_ACQUISITION_COSTS',
  PROFIT_TAX_STATEMENT = 'PROFIT_TAX_STATEMENT',
  YEARLY_TAX_STATEMENT = 'YEARLY_TAX_STATEMENT',
  TAX_SETTLEMENT_CALCULATION = 'TAX_SETTLEMENT_CALCULATION',
}

export enum PostboxContentType {
  PDF = 'application/pdf',
}

export interface PostboxItem {
  solarisId: string;
  belongsTo: string;
  ownerType: PostboxOwnerType;
  createdAt: Date;
  documentDate: string;
  documentType: PostboxType;
  name: string;
  description: string;
  customerNotification: boolean;
  customerConfirmation: boolean;
  documentSize: number;
  documentContentType: PostboxContentType;
  documentId: string;
}
