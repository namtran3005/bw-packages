import { TermsAndConditionsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';

import { TermsAndConditionsLogsModel } from '../model';

export const findOneById = (
  documentId: string,
  owner: string
): Promise<DocumentDefinition<TermsAndConditionsDoc> | null> => {
  return TermsAndConditionsLogsModel.findOne({ documentId, owner })
    .lean()
    .exec();
};
