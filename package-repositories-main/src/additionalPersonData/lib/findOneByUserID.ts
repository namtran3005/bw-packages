import { AdditionalPersonDataDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { AdditionalPersonDataModel } from '..';

export const findOneByUserID = async (
  userId: string
): Promise<DocumentDefinition<AdditionalPersonDataDoc> | null> => {
  return AdditionalPersonDataModel.findOne({
    userId,
  })
    .lean()
    .exec();
};
