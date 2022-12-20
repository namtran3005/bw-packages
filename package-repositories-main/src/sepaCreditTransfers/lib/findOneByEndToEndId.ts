import { SepaCreditTransferDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SepaCreditTransferModel } from '../model';

export const findOneByEndToEndId = (
  endToEndId: string
): Promise<DocumentDefinition<SepaCreditTransferDoc> | null> => {
  return SepaCreditTransferModel.findOne({ endToEndId }).lean().exec();
};
