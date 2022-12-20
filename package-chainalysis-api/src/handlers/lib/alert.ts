import { Handler } from '../handler';
import { Asset, AssetLoose } from '../../types';

export enum Level {
  Severe = 'SEVERE',
  High = 'HIGH',
  Medium = 'MEDIUM',
  Low = 'LOW',
}

export enum SortBy {
  Timestamp = 'timestamp',
  Level = 'level',
  AlertAmountUsd = 'alertAmountUsd',
  AlertStatusCreatedAt = 'alertStatusCreatedAt',
  AssignedTo = 'assignedTo',
  AssignedBy = 'assignedBy',
  AssingedAt = 'assignedAt',
}

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum AlertType {
  Transfer = 'TRANSFER',
  Behavioral = 'BEHAVIORAL',
}

export enum ExposureType {
  Direct = 'DIRECT',
  Indirect = 'INDIRECT',
}

export enum AlertStatus {
  Unreviewed = 'Unreviewed',
  InReview = 'In Review',
  Flagged = 'Flagged',
  NoReview = 'No Review',
  Dismissed = 'Dismissed',
}

export enum WindowSize {
  OneDay = '1 day',
  OneWeek = '1 week',
  OneMonth = '1 month',
}

export enum Validity {
  Valid = 'VALID',
  Invalid = 'INVALID',
  Revalid = 'REVALID',
}

export enum Direction {
  Sent = 'sent',
  Received = 'received',
}

export interface AlertListOptions {
  asset?: Asset;
  createdAt_gte?: string;
  createdAt_lte?: string;
  alertStatusCreatedAt_gte?: string;
  alertStatusCreatedAt_lte?: string;
  level?: Level;
  transferReference?: string;
  userId?: string;
  limit?: number;
  offset?: number;
  sort?: {
    by: SortBy;
    direction: SortDirection;
  };
  alertType?: AlertType;
}

export interface AlertListResponse {
  total: number;
  limit: number;
  offset: number;
  data: {
    alertAmountUsd: number;
    transactionHash: string | null;
    exposureType: ExposureType;
    alertStatus: AlertStatus;
    transferReportedAt: string | null;
    alertIdentifier: string;
    transferReference: string | null;
    alertStatusCreatedBy: string | null;
    valid: boolean;
    transferCountWindow: string | null;
    ruleAsset: AssetLoose | null;
    direction: Direction;
    timestamp: string | null;
    period: string | null;
    windowSize: WindowSize;
    level: Level;
    service: string | null;
    alertStatusCreatedAt: string;
    userId: string;
    transferCount: string | null;
    createdAt: string;
    alertType: AlertType;
    transferOutputAddress: string | null;
    validity: Validity;
    category: string | null;
    transactionIndex: number | null;
    asset: AssetLoose | null;
    rule: string;
    minThreshold: number;
    maxThreshold: number | null;
  }[];
}

export class AlertHandler extends Handler {
  public async list(options: AlertListOptions = {}) {
    return this.client.get<AlertListResponse>(`alerts`, options);
  }
}
