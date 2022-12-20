import { SolarisChallengeEmailModel } from '../model';

export const insert = (input: { userId: string; requestId: string }) =>
  SolarisChallengeEmailModel.create(input);
