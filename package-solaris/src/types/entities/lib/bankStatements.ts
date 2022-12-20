import {
  RecipientInformation,
  AccountInformation,
} from './statementsOfAccount';

export interface BankStatement {
  solarisId: string;
  recipientInformation: RecipientInformation;
  issueDate: Date;
  statementPeriodStartDate: Date;
  statementPeriodEndDate: Date;
  accountInformation: AccountInformation;
}

export interface BankStatementRequest {
  startDate: string;
  endDate: string;
}
