import { TermsAndConditionsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';

import { TermsAndConditionsLogsModel } from '../model';

export const findAll = (
  owner: string
): Promise<DocumentDefinition<TermsAndConditionsDoc>[]> => {
  return TermsAndConditionsLogsModel.find({ owner }).lean().exec();
};
