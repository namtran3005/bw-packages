import { SepaCreditTransfer } from '@bitwala-cryptobank-squad/package-solaris';
import { SepaCreditTransferDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SepaCreditTransferModel } from '../model';

export const insertSepaCreditTransfer = (
  transfer: SepaCreditTransfer & { owner: string }
): Promise<SepaCreditTransferDoc> => {
  return SepaCreditTransferModel.create(transfer);
};
