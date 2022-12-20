import * as Mongoose from 'mongoose';
import { Error } from 'mongoose';
import {
  CryptoApisWebhookLog,
  cryptoApisWebhookLogSchema,
} from '../cryptoApisWebhookLogs';

describe('cryptoApisWebhookLogs', () => {
  const Model = Mongoose.model(
    'CryptoApisWebhookLogs',
    cryptoApisWebhookLogSchema
  );

  it('should return errors as undefined after sync validation', () => {
    const log: CryptoApisWebhookLog = {
      headers: {},
      ipAddress: '1.1.1.1',
      payload: {},
      error: new Error('test').message,
    };

    const cryptoApisWebhookSubscription = new Model(log);

    const error = cryptoApisWebhookSubscription.validateSync();
    expect(error).toBeUndefined();
  });

  it('should return error after sync validation when user id is missing', () => {
    const logWithMissingHeaders = {
      ipAddress: '1.1.1.1',
      payload: {},
    } as CryptoApisWebhookLog;

    const cryptoApisWebhookSubscription = new Model(logWithMissingHeaders);

    const error = cryptoApisWebhookSubscription.validateSync();
    expect(error).toBeInstanceOf(Error.ValidationError);
  });
});
