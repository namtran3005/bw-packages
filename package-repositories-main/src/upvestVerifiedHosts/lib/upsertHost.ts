import {
  UpvestVerifiedHost,
  UpvestVerifiedHostDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { UpvestVerifiedHostModel } from '../model';

export const upsertHost = async (
  verifiedHost: UpvestVerifiedHost
): Promise<UpvestVerifiedHostDoc> => {
  return UpvestVerifiedHostModel.findOneAndUpdate(
    {
      host: verifiedHost.host,
    },
    {
      $set: verifiedHost,
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  ).exec();
};
