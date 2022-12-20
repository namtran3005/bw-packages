import {
  AutomaticAccountClosureChecksDoc,
  automaticAccountClosureChecksSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const AutomaticAccountClosureChecksModel = mainConnection.db.model<
AutomaticAccountClosureChecksDoc
>('AutomaticAccountClosureChecks', automaticAccountClosureChecksSchema);
