import { SepaRecentRecipientsDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SepaRecentRecipientModel } from '../model';

export const upsert = (
  owner: string,
  name: string,
  iban: string,
  lastTransactionAt: Date
): Promise<SepaRecentRecipientsDoc> => {
  return SepaRecentRecipientModel.findOneAndUpdate(
    {
      owner,
      iban,
    },
    {
      $set: {
        owner,
        name,
        iban,
        lastTransactionAt,
      },
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  ).exec();
};
