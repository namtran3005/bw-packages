import { TermsAndConditionsEventType } from '@bitwala-cryptobank-squad/package-schemas';

import { TermsAndConditionsLogsModel } from '../model';

export const insert = (
  owner: string,
  event: TermsAndConditionsEventType,
  documentId: string
) => {
  return TermsAndConditionsLogsModel.create({
    owner,
    event,
    documentId,
  });
};
