import {
  SdaAccountClosureRequestDoc,
  ClosureRequestStates,
} from '@bitwala-cryptobank-squad/package-schemas';
import { DocumentDefinition } from 'mongoose';
import { SdaAccountClosureRequestModel } from '../model';

export const findPending = (): Promise<DocumentDefinition<SdaAccountClosureRequestDoc>[]> => {
  return SdaAccountClosureRequestModel.find({
    state: ClosureRequestStates.PENDING,
  })
    .lean()
    .exec();
};
