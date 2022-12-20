import { upsertUserTutorials } from './lib/upsertUserTutorials';
import { findOneByOwner } from './lib/findOneByOwner';

export { UserTutorialsModel } from './model';

export const userTutorialsRepo = {
  findOneByOwner,
  upsert: upsertUserTutorials,
};
