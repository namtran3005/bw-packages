import { ScaChallengeDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { ScaChallengeModel } from '../model';

export const findOneById = (id: string): Promise<DocumentDefinition<ScaChallengeDoc> | null> => {
  return ScaChallengeModel.findOne({ _id: id })
    .lean()
    .exec();
};
