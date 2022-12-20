import { UserActionLog, UserActionLogDoc } from '@bitwala-cryptobank-squad/package-schemas';
import { UserActionLogModel } from '../model';

export const insert = (
  transaction: UserActionLog
): Promise<UserActionLogDoc> => {
  return UserActionLogModel.create(transaction);
};
