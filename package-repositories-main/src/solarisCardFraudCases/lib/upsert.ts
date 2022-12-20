import { CardFraudCase } from '@bitwala-cryptobank-squad/package-solaris';
import { SolarisCardFraudCaseDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisCardFraudCaseModel } from '../model';

export const upsert = async (
  input: CardFraudCase & { owner: string }
): Promise<SolarisCardFraudCaseDoc> => {
  return SolarisCardFraudCaseModel.findOneAndUpdate(
    {
      solarisId: input.solarisId,
    },
    {
      $set: input,
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  ).exec();
};
