import { SolarisDeviceRestrictedDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisDeviceRestrictedModel } from '../model';

export const findByOwnerAndDeviceName = (
  owner: string,
  name: string,
  deviceId: string
): Promise<DocumentDefinition<SolarisDeviceRestrictedDoc> | null> => {
  return SolarisDeviceRestrictedModel.findOne({
    owner,
    name,
    deviceId,
    deletedAt: { $exists: false },
  })
    .lean()
    .exec();
};
