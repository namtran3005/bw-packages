import {
  SepaCreditTransferDoc, TransactionDoc
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition, Model } from 'mongoose';
import { SepaCreditTransferModel } from '../../sepaCreditTransfers/model';

// TODO: resolve right transaction kind when they're implemented
const transferCollectionMap: {
  [key: string]: Model<SepaCreditTransferDoc>;
} = {
  'sepa-credit-transfers': SepaCreditTransferModel,
};

export const getTransaction = (
  transaction: TransactionDoc
): Promise<DocumentDefinition<SepaCreditTransferDoc> | null> | null => {
  if (transaction.domain in transferCollectionMap) {
    return transferCollectionMap[transaction.domain]
      .findOne({
        _id: transaction.itemId,
      })
      .lean({ getters: true })
      .exec();
  }

  return null;
};
