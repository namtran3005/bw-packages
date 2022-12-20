export enum IdentificationMethod {
  IDNOW = 'idnow',
  IDNOW_AUTOIDENT = 'idnow_autoident',
  POSTIDENT = 'postident',
  MANUAL = 'manual',
}

export enum IdNowStatus {
  CREATED = 'created',
  PENDING = 'pending',
  PENDING_SUCCESSFUL = 'pending_successful',
  PENDING_FAILED = 'pending_failed',
  SUCCESSFUL = 'successful',
  ABORTED = 'aborted',
  CANCELED = 'canceled',
  FAILED = 'failed',
}

export enum PostIdentStatus {
  CREATED = 'created',
  PENDING = 'pending',
  PENDING_SUCCESSFUL = 'pending_successful',
  SUCCESSFUL = 'successful',
  FAILED = 'failed',
}

export interface Identification {
  solarisId: string;
  reference: string | null;
  url: string | null;
  status: IdNowStatus;
  completedAt: Date | null;
  method: IdentificationMethod;
  estimatedWaitingTime?: number;
  failureReason?: string;
}

export interface Legitimation {
  legitimationDocumentNumber: string;
  legitimationType: LegitimationType;
  legitimationIssuer: string;
  legitimationCountry: string;
  legitimationIssuedAt: Date;
  legitimationValidUntil: Date;
}

export enum LegitimationType {
  IDCARD = 'IDCARD',
  PASSPORT = 'PASSPORT',
}
