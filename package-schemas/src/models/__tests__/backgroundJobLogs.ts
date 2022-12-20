import * as Mongoose from 'mongoose';
import {
  backgroundJobLogsSchema,
  BackgroundJobLogEvent,
  BackgroundJobLogDomain,
  BackgroundJobLog,
  BackgroundJobLogCallerModule,
} from '../backgroundJobLogs';

describe('Background Job logs', () => {
  it('should return errors as undefined after sync validation', () => {
    const transaction: BackgroundJobLog = {
      event: BackgroundJobLogEvent.ABUY_ORDER_BTC_CUSTODY_EXEC_OK,
      callerModule: BackgroundJobLogCallerModule.AUTOBUY_NOTIFIER_LAMBDA,
      domain: BackgroundJobLogDomain.AUTOBUY_LOG_DOMAIN,
      owner: '5eeb4cecdb7dfa0172e0dd7f',
      itemId: '5eeb3818daf63701727bba61',
    };

    const Model = Mongoose.model(
      'BackgroundJobLogsModel',
      backgroundJobLogsSchema
    );
    const backgroundJobLog = new Model(transaction);

    const errors = backgroundJobLog.validateSync();

    expect(errors).toBeUndefined();
  });
});
