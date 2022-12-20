import { SolarisDeviceDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisDeviceModel } from '../model';

export const findByOwner = (
  owner: string
): Promise<DocumentDefinition<SolarisDeviceDoc> | null> => {
  return SolarisDeviceModel.findOne({
    owner,
    deletedAt: { $exists: false },
  })
    .lean()
    .exec();
};
