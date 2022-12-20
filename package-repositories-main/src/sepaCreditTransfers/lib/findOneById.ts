import { SepaCreditTransferDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SepaCreditTransferModel } from '../model';

export const findOneById = (
  id: string
): Promise<DocumentDefinition<SepaCreditTransferDoc> | null> => {
  return SepaCreditTransferModel.findOne({ _id: id })
    .lean()
    .exec();
};
