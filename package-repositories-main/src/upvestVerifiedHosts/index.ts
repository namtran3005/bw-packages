import { upsertHost } from './lib/upsertHost';
import { findOneByHost } from './lib/findOneByHost';

export { UpvestVerifiedHostModel } from './model';

export const upvestVerifiedHostsRepo = {
  upsert: upsertHost,
  findOneByHost,
};
