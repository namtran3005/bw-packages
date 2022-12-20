import {
  SepaCreditTransferInput,
  SepaCreditTransfer,
} from './sepaCreditTransfers';

export interface TimedOrderInput {
  executeAt: string;
  transaction: SepaCreditTransferInput;
}

export enum TimedOrderStatus {
  CREATED = 'CREATED',
  AUTHORIZATION_REQUIRED = 'AUTHORIZATION_REQUIRED',
  CONFIRMATION_REQUIRED = 'CONFIRMATION_REQUIRED',
  SCHEDULED = 'SCHEDULED',
  EXECUTED = 'EXECUTED',
  CANCELED = 'CANCELED',
  FAILED = 'FAILED',
}

export interface TimedOrder {
  solarisId: string;
  executeAt: Date;
  executedAt: Date | null;
  status: TimedOrderStatus;
  scheduledTransaction: SepaCreditTransfer;
}
