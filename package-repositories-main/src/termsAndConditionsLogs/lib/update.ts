import { TermsAndConditionsEventType } from '@bitwala-cryptobank-squad/package-schemas';

import { TermsAndConditionsLogsModel } from '../model';

export const update = (
  owner: string,
  documentId: string,
  event: TermsAndConditionsEventType
) => {
  return TermsAndConditionsLogsModel.findOneAndUpdate(
    {
      owner,
      documentId,
    },
    { $set: { event } },
    {
      new: true,
      runValidators: true,
    }
  )
    .lean()
    .exec();
};
