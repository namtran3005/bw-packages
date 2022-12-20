/* eslint-disable @typescript-eslint/no-explicit-any*/

import { AuthorizationMethod } from '../../misc';

export interface CreateChangeRequestInput {
  changeRequestId: string;
  authMethod: AuthorizationMethod;
}

export interface ConfirmChangeRequestInput {
  changeRequestId: string;
  tan: string;
}

export enum ChangeRequestStatus {
  AUTHORIZATION_REQUIRED = 'AUTHORIZATION_REQUIRED',
  CONFIRMATION_REQUIRED = 'CONFIRMATION_REQUIRED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export interface ChangeRequest {
  solarisId: string;
  status: ChangeRequestStatus;
  updatedAt: Date;
  url?: string;
  stringToSign?: string;
}

export interface ResolvedChangeRequest extends ChangeRequest {
  responseBody: any;
  responseCode: number;
}

export interface AuthorizeChangeRequestSolarisHandlerInput {
  changeRequestId: string;
  deliveryMethod: AuthorizationMethod;
  personId?: string;
  deviceId?: string;
}
export interface ConfirmChangeRequestSolarisHandlerInput {
  changeRequestId: string;
  personId?: string;
  tan?: string;
  deviceId?: string;
  signature?: string;
}
