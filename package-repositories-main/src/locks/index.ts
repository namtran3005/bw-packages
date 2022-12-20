import { testAndSet } from './lib/testAndSet';
import { unset } from './lib/unset';

export { LockModel } from './model';

export const locksRepo = {
  testAndSet,
  unset,
};
