import { MoneyAmount } from '../../misc/lib/money';

export interface SepaCreditTransferInput {
  reference?: string;
  amount: MoneyAmount;
  description?: string;
  recipientName: string;
  recipientIban: string;
  recipientBic?: string;
  endToEndId?: string;
}

export enum SepaCreditTransferStatus {
  CREATED = 'created',
  AUTHORIZATION_REQUIRED = 'authorization_required',
  CONFIRMATION_REQUIRED = 'confirmation_required',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
  EXECUTED = 'executed',
  REVIEW_NEEDED = 'review_needed',
  SCHEDULED = 'scheduled',
  CANCELED = 'canceled',
}

export interface SepaCreditTransfer extends SepaCreditTransferInput {
  solarisId: string;
  status: SepaCreditTransferStatus;
}
