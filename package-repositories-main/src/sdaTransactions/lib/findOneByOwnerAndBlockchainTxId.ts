import { SdaTransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaTransactionModel } from '../model';

// TODO(alexandr): and amount as part of selector, otherwise selector is not unique
export const findOneByOwnerAndBlockchainTxId = (
  owner: string,
  blockchainTxId: string
): Promise<DocumentDefinition<SdaTransactionDoc> | null> => {
  return SdaTransactionModel.findOne({ owner, blockchainTxId }).lean().exec();
};
