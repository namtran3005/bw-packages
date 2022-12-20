import {
  AutomaticAccountClosureRequestsDoc,
  AutomaticAccountClosureRequests,
} from '@bitwala-cryptobank-squad/package-schemas';
import { AutomaticAccountClosureRequestsModel } from '../model';

type WebhookClosureRequest = Omit<AutomaticAccountClosureRequests,
  'isAcrRequestSuccessfull' | 'bookingsAssociated' | 'openReservations' | 'acrUpdatedAt'>
  
export const upsertAutomaticAccountClosureRequests = (
  accountClosureRequestsPayload: AutomaticAccountClosureRequests | WebhookClosureRequest
): Promise<AutomaticAccountClosureRequestsDoc> => {
  return AutomaticAccountClosureRequestsModel.findOneAndUpdate(
    {
      solarisId: accountClosureRequestsPayload.solarisId,
    },
    {
      $set: accountClosureRequestsPayload,
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  ).exec();
};