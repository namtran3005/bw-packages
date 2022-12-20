import {
  UserDevicePairDataSchema,
  UserDevicePairDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { UserDevicePairsModel } from '../model';

export const insert = (
  data: UserDevicePairDataSchema
): Promise<UserDevicePairDoc> => {
  // Save public key base64 encoded
  data.publicKey = Buffer.from(data.publicKey).toString('base64');
  return UserDevicePairsModel.create(data);
};
