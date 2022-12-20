import { SolarisChallengeEmailDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisChallengeEmailModel } from '../model';

export const findLastFinishedByOwner = (
  userId: string
): Promise<DocumentDefinition<SolarisChallengeEmailDoc> | null> =>
  SolarisChallengeEmailModel.findOne({ userId, finishedAt: { $exists: true } })
    .sort({ finishedAt: -1 })
    .lean()
    .exec();
