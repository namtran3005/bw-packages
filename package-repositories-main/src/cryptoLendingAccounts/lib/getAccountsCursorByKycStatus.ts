import { CryptoLendingKycStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoLendingAccountModel } from '../model';
import { createBatchedCursor } from '../../utils';

export const getAccountsCursorByKycStatus = (
  kycStatus: CryptoLendingKycStatus,
  batchSize: number
) => {
  const accountsCursor = CryptoLendingAccountModel.find({
    kycStatus,
  })
    .batchSize(batchSize)
    .cursor();

  return createBatchedCursor(accountsCursor, batchSize);
};
