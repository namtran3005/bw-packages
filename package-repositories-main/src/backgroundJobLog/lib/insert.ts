import {
  BackgroundJobLog,
  BackgroundJobLogDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { BackgroundJobLogModel } from '../model';

export const insert = (
  data: BackgroundJobLog
): Promise<BackgroundJobLogDoc> => {
  return BackgroundJobLogModel.create(data);
};
