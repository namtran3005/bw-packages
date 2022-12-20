import { UserSpecialPurposeAddressDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UserSpecialPurposeAddressModel } from '../model';

export const findOneByOwner = (
  userId: string
): Promise<DocumentDefinition<UserSpecialPurposeAddressDoc> | null> => {
  return UserSpecialPurposeAddressModel.findOne({ owner: userId })
    .lean()
    .exec();
};
