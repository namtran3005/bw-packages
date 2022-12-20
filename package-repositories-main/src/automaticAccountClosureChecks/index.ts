import { insertAutomaticAccountClosureChecks } from './lib/insertAutomaticAccountClosureChecks';

export { AutomaticAccountClosureChecksModel } from './model';

export const automaticAccountClosureChecksRepo = {
  insert: insertAutomaticAccountClosureChecks,
};
