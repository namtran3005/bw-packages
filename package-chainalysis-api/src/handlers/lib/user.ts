import { Handler } from '../handler';

export enum Score {
  Green = 'green',
  Amber = 'amber',
  Red = 'red',
}

export enum RiskScore {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
  Severe = 'SEVERE',
}

export interface UserListOptions {
  limit?: number;
  offset?: number;
}

export interface UserListResponse {
  total: number;
  limit: number;
  offset: number;
  data: {
    userId: string;
    score: Score;
    lastActivity: string | null;
    scoreUpdatedDate: string | null;
    riskScore: RiskScore;
  }[];
}

export class UserHandler extends Handler {
  public async list(options: UserListOptions = {}) {
    return this.client.get<UserListResponse>('users', options);
  }
}
