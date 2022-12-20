import { SolarisChallengeEmailDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SolarisChallengeEmailModel } from '../model';

export const markFinishedByRequestId = (
  requestId: string,
  input: {
    currentEmail: string;
    newEmail: string;
  }
): Promise<DocumentDefinition<SolarisChallengeEmailDoc> | null> =>
  SolarisChallengeEmailModel.findOneAndUpdate(
    { requestId },
    { $set: { ...input, finishedAt: new Date() } },
    { runValidators: true }
  )
    .lean()
    .exec();
