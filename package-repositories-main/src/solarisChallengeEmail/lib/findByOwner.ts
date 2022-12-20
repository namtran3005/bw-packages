import { SolarisChallengeEmailDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisChallengeEmailModel } from '../model';

export const findOneByOwner = (
  userId: string
): Promise<DocumentDefinition<SolarisChallengeEmailDoc> | null> =>
  SolarisChallengeEmailModel.findOne({ userId, finishedAt: { $exists: false } })
    .sort({ createdAt: -1 })
    .lean()
    .exec();
