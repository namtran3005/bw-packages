import { SolarisIdentificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisIdentificationModel } from '../model';

export const findLastSuccessfulIdentification = async (
  owner: string
): Promise<DocumentDefinition<SolarisIdentificationDoc> | null> => {
  return SolarisIdentificationModel.findOne({
    owner,
    $or: [{ status: 'pending_successful' }, { status: 'successful' }],
  })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
};
