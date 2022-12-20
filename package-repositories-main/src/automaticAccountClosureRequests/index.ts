import { upsertAutomaticAccountClosureRequests } from './lib/upsertAutomaticAccountClosureRequests';
import { findOne } from './lib/findOne';

export { AutomaticAccountClosureRequestsModel } from './model';

export const automaticAccountClosureRequestsRepo = {
  upsert: upsertAutomaticAccountClosureRequests,
  findOne
};
