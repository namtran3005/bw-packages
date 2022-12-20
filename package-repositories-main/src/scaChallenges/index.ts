import { insert } from './lib/insert';
import { findOneById } from './lib/findOneById';
import { findPendingByOwner } from './lib/findPendingByOwner';
import { markChangeRequestInitiated } from './lib/markChangeRequestInitiated';

export { ScaChallengeModel } from './model';

export const scaChallengesRepo = {
  insert,
  findOneById,
  findPendingByOwner,
  markChangeRequestInitiated,
};
