import { ScaChallenge, ScaChallengeDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { ScaChallengeModel } from '../model';

export const insert = (input: ScaChallenge): Promise<ScaChallengeDoc> => {
  return ScaChallengeModel.create(input);
};
