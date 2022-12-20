import {
  AutomaticAccountClosureChecksDoc,
  AutomaticAccountClosureChecks,
} from '@bitwala-cryptobank-squad/package-schemas';
import { AutomaticAccountClosureChecksModel } from '../model';

export const insertAutomaticAccountClosureChecks = (
  accountClosureCheckResult: AutomaticAccountClosureChecks
): Promise<AutomaticAccountClosureChecksDoc> => {
  return AutomaticAccountClosureChecksModel.create(accountClosureCheckResult);
};
