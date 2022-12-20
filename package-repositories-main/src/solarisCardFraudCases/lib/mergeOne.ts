import { SolarisCardFraudCaseDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { CardFraudCase } from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisCardFraudCaseModel } from '../model';

export const mergeOne = (
  solarisId: string,
  data: Partial<CardFraudCase>
): Promise<DocumentDefinition<SolarisCardFraudCaseDoc> | null> => {
  return SolarisCardFraudCaseModel.findOneAndUpdate(
    { solarisId },
    { $set: data },
    { runValidators: true }
  )
    .lean()
    .exec();
};
