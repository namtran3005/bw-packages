import { SolarisCardFraudCaseDoc } from '@bitwala-cryptobank-squad/package-schemas';
import {
  CardFraudCaseResolution,
  CardFraudCaseTransactionStatus
} from '@bitwala-cryptobank-squad/package-solaris';
import { DocumentDefinition } from 'mongoose';
import { SolarisCardFraudCaseModel } from '../model';

export const findPendingByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisCardFraudCaseDoc>[]> => {
  return SolarisCardFraudCaseModel.find({
    owner,
    resolution: CardFraudCaseResolution.PENDING,
    respondUntil: {
      $gt: new Date(),
    },
    'cardTransaction.status': CardFraudCaseTransactionStatus.DECLINED,
  })
    .sort({ respondUntil: -1 })
    .lean()
    .exec();
};
