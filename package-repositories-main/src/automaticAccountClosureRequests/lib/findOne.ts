import { DocumentDefinition } from 'mongoose';
import {
  AutomaticAccountClosureRequestsDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { AutomaticAccountClosureStatuses } from '@bitwala-cryptobank-squad/package-solaris';
import { AutomaticAccountClosureRequestsModel } from '../model';

export type FindAcrRequest = {
  solarisId?: string,
  accountId?: string,
  status?: AutomaticAccountClosureStatuses[]
} & ({
  solarisId: string;
} | ({
  accountId: string;
  status: AutomaticAccountClosureStatuses[];
}))

export const findOne = async (
  { solarisId, accountId, status }: FindAcrRequest
): Promise<DocumentDefinition<AutomaticAccountClosureRequestsDoc> | null> => {
  const findInput = {
    ...(solarisId && { solarisId }),
    ...(accountId && { accountId }),
    ...(status && { status: { $in: status } })
  }
  return AutomaticAccountClosureRequestsModel.findOne(findInput)
    .lean()
    .exec();
};
