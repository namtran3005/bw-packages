import { UpvestVerifiedHostDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { UpvestVerifiedHostModel } from '../model';

export const findOneByHost = async (
  host: string
): Promise<DocumentDefinition<UpvestVerifiedHostDoc> | null> => {
  return UpvestVerifiedHostModel.findOne({
    host,
  })
    .lean()
    .exec();
};
