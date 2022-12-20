import { SepaCreditTransferStatus } from '@bitwala-cryptobank-squad/package-solaris';

export enum TransactionStatus {
  PENDING = 'pending',
  QUEUED = 'queued',
  COMPLETE = 'complete',
  FAILED = 'failed',
  RETURN = 'return',
  REPLACED = 'replaced',
  CANCEL = 'cancel',
  SCHEDULED = 'scheduled',
  UNKNOWN = 'unknown',
}

export enum BitgoTransactionStatus {
  SIGNED = 'signed',
  UNCONFIRMED = 'unconfirmed',
  PENDING_APPROVAL = 'pendingApproval',
  CONFIRMED = 'confirmed',
  REMOVED = 'removed',
  REJECTED = 'rejected',
}

// Solaris api

const SOLARIS_TO_BITWALA_TRANSACTION_ITEM_STATUSES_MAP: {
  [key: string]: TransactionStatus;
} = {
  created: TransactionStatus.PENDING,
  authorization_required: TransactionStatus.PENDING,
  confirmation_required: TransactionStatus.PENDING,
  review_needed: TransactionStatus.PENDING,
  accepted: TransactionStatus.PENDING,
  scheduled: TransactionStatus.SCHEDULED,
  executed: TransactionStatus.COMPLETE,
  declined: TransactionStatus.FAILED,
  canceled: TransactionStatus.CANCEL,
  returned: TransactionStatus.RETURN,
};

const SDA_TRANSACTION_TO_BITWALA_TRANSACTION_ITEM_STATUSES_MAP: {
  [key: string]: TransactionStatus;
} = {
  PENDING: TransactionStatus.PENDING,
  APPROVED: TransactionStatus.PENDING,
  COMPLETED: TransactionStatus.COMPLETE,
  CONFIRMED: TransactionStatus.COMPLETE,
  FAILED: TransactionStatus.FAILED,
  CANCELLED: TransactionStatus.FAILED,
};

export const getStatusFromSdaTransaction = (
  state: string
): TransactionStatus => {
  return (
    SDA_TRANSACTION_TO_BITWALA_TRANSACTION_ITEM_STATUSES_MAP[state] ||
    TransactionStatus.UNKNOWN
  );
};

// SepaCreditTransfer
export const getItemStatusFromSepaCreditTransfer = (
  status: SepaCreditTransferStatus
): TransactionStatus => {
  return (
    SOLARIS_TO_BITWALA_TRANSACTION_ITEM_STATUSES_MAP[status] ||
    TransactionStatus.UNKNOWN
  );
};

// SolarisReservation
export const getItemStatusFromReservation = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  status: string
): TransactionStatus => {
  // return PENDING as with the current implementation, all the transactions related to reservations have status PENDING
  return TransactionStatus.PENDING;
};

// Bitgo api and Trading

const BITGO_TO_BITWALA_TRANSACTION_ITEM_STATUSES_MAP: {
  [key: string]: TransactionStatus;
} = {
  // bitgo
  signed: TransactionStatus.PENDING,
  unconfirmed: TransactionStatus.PENDING,
  pendingApproval: TransactionStatus.PENDING,
  confirmed: TransactionStatus.COMPLETE,
  removed: TransactionStatus.FAILED,
  rejected: TransactionStatus.FAILED,
};

// BitcoinTransaction
export const getStatusFromBitcoinTransaction = (
  state: string
): TransactionStatus => {
  return (
    BITGO_TO_BITWALA_TRANSACTION_ITEM_STATUSES_MAP[state] ||
    TransactionStatus.UNKNOWN
  );
};

// TODO: Currently this has all possible states, this needs to be updated once we know the actual used states for ETH
const ETHEREUM_TRANSACTION_ITEM_STATUSES_MAP: Record<
  string,
  TransactionStatus
> = {
  pending: TransactionStatus.PENDING,
  queued: TransactionStatus.QUEUED,
  complete: TransactionStatus.COMPLETE,
  failed: TransactionStatus.FAILED,
  return: TransactionStatus.RETURN,
  cancel: TransactionStatus.CANCEL,
  scheduled: TransactionStatus.SCHEDULED,
  signed: TransactionStatus.PENDING,
  unconfirmed: TransactionStatus.PENDING,
  pendingApproval: TransactionStatus.PENDING,
  confirmed: TransactionStatus.COMPLETE,
  removed: TransactionStatus.FAILED,
  rejected: TransactionStatus.FAILED,
  unknown: TransactionStatus.UNKNOWN,
};

// EthereumTransaction
export const getStatusFromEthereumTransaction = (
  state: string
): TransactionStatus => {
  return (
    ETHEREUM_TRANSACTION_ITEM_STATUSES_MAP[state] || TransactionStatus.UNKNOWN
  );
};

// Trading

const TRADING_TO_BITWALA_TRANSACTION_ITEM_STATUSES_MAP: {
  [key: string]: TransactionStatus;
} = {
  reserved: TransactionStatus.PENDING,
  paid: TransactionStatus.PENDING,
  payment_detected: TransactionStatus.PENDING,
  payment_confirmed: TransactionStatus.PENDING,
  clearing_scheduled: TransactionStatus.PENDING,
  cleared: TransactionStatus.PENDING,
  settled: TransactionStatus.COMPLETE,
  payment_invalid: TransactionStatus.FAILED,
  failed: TransactionStatus.FAILED,
  reservation_released: TransactionStatus.FAILED,
};

// ORDER
export const getItemStatusFromOrder = (state: string): TransactionStatus => {
  return (
    TRADING_TO_BITWALA_TRANSACTION_ITEM_STATUSES_MAP[state] ||
    TransactionStatus.UNKNOWN
  );
};
