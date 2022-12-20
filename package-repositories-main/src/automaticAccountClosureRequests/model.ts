import {
  AutomaticAccountClosureRequestsDoc,
  automaticAccountClosureRequestsSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const AutomaticAccountClosureRequestsModel = mainConnection.db.model<
AutomaticAccountClosureRequestsDoc
>('AutomaticAccountClosureRequests', automaticAccountClosureRequestsSchema);
