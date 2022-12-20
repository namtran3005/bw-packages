import { SolarisIdentificationDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisIdentificationModel } from '../model';

export const findLastAutoIdentByOwner = async (
  owner: string
): Promise<DocumentDefinition<SolarisIdentificationDoc> | null> => {
  return SolarisIdentificationModel.findOne({
    owner,
    method: 'idnow_autoident',
  })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
};
