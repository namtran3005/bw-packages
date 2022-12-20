import { insert } from './lib/insert';
import { markFinishedByRequestId } from './lib/markFinishedByRequestId';
import { findLastFinishedByOwner } from './lib/findLastFinishedByOwner';
import { findOneByOwner } from './lib/findByOwner';

export { SolarisChallengeEmailModel } from './model';

export const solarisChallengeEmailRepo = {
  insert,
  findLastFinishedByOwner,
  markFinishedByRequestId,
  findOneByOwner,
};
