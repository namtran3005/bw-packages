import { TransactionDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { TransactionModel } from '../model';

interface Selector {
  itemId: string;
  domain?: string;
}

export const findOneByItemId = (
  itemId: string,
  domain?: string
): Promise<DocumentDefinition<TransactionDoc> | null> => {
  const selector: Selector = {
    itemId,
  };
  if (domain) {
    selector.domain = domain;
  }
  return TransactionModel.findOne(selector)
    .lean({ getters: true })
    .exec();
};
