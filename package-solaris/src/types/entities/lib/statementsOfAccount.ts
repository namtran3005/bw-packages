import { MoneyAmount } from '../../misc/lib/money';

export interface RecipientInformation {
  line1?: string;
  line2?: string;
  line3?: string;
  line4?: string;
  line5?: string;
  line6?: string;
}

export enum AccountStatementInterval {
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  EVERY_SIX_MONTHS = 'EVERY_SIX_MONTHS',
  ANNUALLY = 'ANNUALLY',
}

export interface AccountInformation {
  iban: string;
  bic: string;
  balanceStart: MoneyAmount;
  balanceEnd: MoneyAmount;
}

export interface AccountStatement {
  solarisId: string;
  recipientInformation: RecipientInformation;
  year: number;
  interval: AccountStatementInterval;
  period?: number;
  statementNumber: string;
  issueDate: Date;
  statementPeriodStartDate: Date;
  statementPeriodEndDate: Date;
  accountInformation: AccountInformation;
  disclaimer?: string;
}

export interface AccountStatementRequest {
  year: number;
  interval: AccountStatementInterval;
  period?: number;
}
