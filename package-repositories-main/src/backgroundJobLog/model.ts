import mongooseLeanId from 'mongoose-lean-id';
import {
  backgroundJobLogsSchema,
  BackgroundJobLogDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

backgroundJobLogsSchema.plugin(mongooseLeanId);

export const BackgroundJobLogModel = mainConnection.db.model<BackgroundJobLogDoc>(
  'BackgroundJobLog',
  backgroundJobLogsSchema
);
