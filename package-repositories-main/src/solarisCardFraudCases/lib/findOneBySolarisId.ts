import { SolarisCardFraudCaseDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisCardFraudCaseModel } from '../model';

export const findOneBySolarisId = (
  solarisId: string
): Promise<DocumentDefinition<SolarisCardFraudCaseDoc> | null> => {
  return SolarisCardFraudCaseModel.findOne({ solarisId })
    .lean()
    .exec();
};
