import {
  UserSpecialPurposeAddressDoc,
  UserSpecialPurposeAddress,
} from '@bitwala-cryptobank-squad/package-schemas';
import { UserSpecialPurposeAddressModel } from '../model';

export const insert = ({
  owner,
  purpose,
  address,
  walletType,
}: UserSpecialPurposeAddress): Promise<UserSpecialPurposeAddressDoc> => {
  return UserSpecialPurposeAddressModel.create({
    owner,
    purpose,
    address,
    walletType,
  });
};
