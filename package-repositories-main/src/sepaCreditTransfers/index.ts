import { insertSepaCreditTransfer } from './lib/insertSepaCreditTransfer';
import { mergeOne } from './lib/mergeOne';
import { upsertOne } from './lib/upsertOne';
import { findOneById } from './lib/findOneById';
import { findOneByEndToEndId } from './lib/findOneByEndToEndId';

export { SepaCreditTransferModel } from './model';

export const sepaCreditTransfersRepo = {
  insert: insertSepaCreditTransfer,
  mergeOne,
  upsertOne,
  findOneById,
  findOneByEndToEndId,
};
