import { UserDevicePairDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserDevicePairsModel, DevicePairingStatus } from '../model';

export const findOne = (selector: {
  owner: string;
  deviceId: string;
}): Promise<DocumentDefinition<UserDevicePairDoc> | null> => {
  // find the latest one
  return UserDevicePairsModel.findOne({
    ...selector,
    status: DevicePairingStatus.ACTIVE,
  }).sort({ createdAt: -1 })
    .lean()
    .exec();
};
