import { SepaCreditTransferStatus } from '@bitwala-cryptobank-squad/package-solaris';

import {
  TransactionStatus,
  getItemStatusFromSepaCreditTransfer,
  getItemStatusFromReservation,
  getStatusFromBitcoinTransaction,
  getItemStatusFromOrder,
} from '../transactionItemStatus';

describe('transactionItemStatus utils', () => {
  // getItemStatusFromSepaCreditTransfer
  it('should return correct value - 1', () => {
    const result = getItemStatusFromSepaCreditTransfer(
      SepaCreditTransferStatus.CREATED
    );
    expect(result).toBe(TransactionStatus.PENDING);
  });
  it('should return correct value - 2', () => {
    const result = getItemStatusFromSepaCreditTransfer(
      'NOT_LISTED_STATUS' as SepaCreditTransferStatus
    );
    expect(result).toBe(TransactionStatus.UNKNOWN);
  });

  // getItemStatusFromReservation
  it('should return correct value - 3', () => {
    const result = getItemStatusFromReservation('OPEN');
    expect(result).toBe(TransactionStatus.PENDING);
  });

  // getStatusFromBitcoinTransaction
  it('should return correct value - 4', () => {
    const result = getStatusFromBitcoinTransaction('rejected');
    expect(result).toBe(TransactionStatus.FAILED);
  });
  it('should return correct value - 5', () => {
    const result = getStatusFromBitcoinTransaction('NOT_LISTED_STATUS');
    expect(result).toBe(TransactionStatus.UNKNOWN);
  });

  // getItemStatusFromOrder
  it('should return correct value - 6', () => {
    const result = getItemStatusFromOrder('settled');
    expect(result).toBe(TransactionStatus.COMPLETE);
  });
  it('should return correct value - 7', () => {
    const result = getItemStatusFromOrder('NOT_LISTED_STATUS');
    expect(result).toBe(TransactionStatus.UNKNOWN);
  });
});
