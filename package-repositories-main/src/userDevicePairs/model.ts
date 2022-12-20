import mongooseLeanId from 'mongoose-lean-id';
import {
  userDevicePairsSchema,
  UserDevicePairDoc,
  DevicePairingStatus,
  WalletsOnDevice as WalletsOnDeviceType,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export { DevicePairingStatus };
export type WalletsOnDevice = WalletsOnDeviceType;

userDevicePairsSchema.plugin(mongooseLeanId);

export const UserDevicePairsModel = mainConnection.db.model<UserDevicePairDoc>(
  'UserDevicePairs',
  userDevicePairsSchema
);
