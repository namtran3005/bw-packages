import { Document, Schema } from 'mongoose';

import {
  LockingStatus,
  LockingReason,
  AccountStatus,
  ClosureReason,
} from '@bitwala-cryptobank-squad/package-solaris';

export interface SolarisAccountLockingStatusChangeInput {
  solarisAccountSolarisId: string;
  lockingStatus: LockingStatus;
  previousLockingStatus?: LockingStatus;
  lockingReasons?: LockingReason[];
  previousLockingReasons?: LockingReason[];
  status?: AccountStatus;
  previousStatus?: AccountStatus;
  closureReason?: ClosureReason;
  previousClosureReason?: ClosureReason;
}

export interface SolarisAccountLockingStatusChangeDoc
  extends Document,
    SolarisAccountLockingStatusChangeInput {
  createdAt: Date;
}

const solarisAccountSolarisIdSchemaType = {
  type: String,
  index: true,
  required: true,
};

const lockingStatusSchemaType = {
  type: String,
  enum: Object.values(LockingStatus),
  required: true,
};

const previousLockingStatusSchemaType = {
  type: String,
  enum: Object.values(LockingStatus),
  required: false,
};

const lockingReasonsSchemaType = {
  type: [String],
  enum: Object.values(LockingReason),
  required: false,
};

const statusSchemaType = {
  type: String,
  enum: Object.values(AccountStatus),
  required: false,
};

const closureReasonSchemaType = {
  type: String,
  enum: (Object.values(ClosureReason) as Array<string | null>).concat([null]),
  required: false,
};

export const solarisAccountLockingStatusChangeSchema: Schema = new Schema(
  {
    solarisAccountSolarisId: solarisAccountSolarisIdSchemaType,
    lockingStatus: lockingStatusSchemaType,
    previousLockingStatus: previousLockingStatusSchemaType,
    lockingReasons: lockingReasonsSchemaType,
    previousLockingReasons: lockingReasonsSchemaType,
    status: statusSchemaType,
    previousStatus: statusSchemaType,
    closureReason: closureReasonSchemaType,
    previousClosureReason: closureReasonSchemaType,
  },
  { timestamps: true, collection: 'solaris-account-locking-status-changes' }
);
