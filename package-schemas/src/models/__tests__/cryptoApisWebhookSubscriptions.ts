import * as Mongoose from 'mongoose';
import { Error } from 'mongoose';
import {
  CryptoApisWebhookSubscription,
  cryptoApisWebhookSubscriptionSchema,
} from '../cryptoApisWebhookSubscriptions';

describe('cryptoApisWebhookSubscription', () => {
  it('should return errors as undefined after sync validation', () => {
    const subscription: CryptoApisWebhookSubscription = {
      referenceId: 'bc243c86-0902-4386-b30d-e6b30fa1f2aa',
      owner: 'abc',
      walletId: 'test',
      isActive: true,
      callbackUrl: 'https://abc.xyz',
      callbackSecretKey: 'abc',
      createdTimestamp: new Date(),
      endpointSpecificData: {
        eventType: 'TRANSACTION_MINED',
        willAlessioEverReadThis: 'maybe',
      },
    };

    const Model = Mongoose.model(
      'CryptoApisWebhookSubscriptions',
      cryptoApisWebhookSubscriptionSchema
    );
    const cryptoApisWebhookSubscription = new Model(subscription);

    const error = cryptoApisWebhookSubscription.validateSync();
    expect(error).toBeUndefined();
  });

  it('should return error after sync validation when referenceId is missing', () => {
    const subscriptionWithMissingReferenceId = {
      owner: 'abc',
      walletId: 'test',
      isActive: true,
      callbackUrl: 'https://abc.xyz',
      createdTimestamp: new Date(),
    } as CryptoApisWebhookSubscription;

    const Model = Mongoose.model(
      'CryptoApisWebhookSubscriptions',
      cryptoApisWebhookSubscriptionSchema
    );
    const cryptoApisWebhookSubscription = new Model(
      subscriptionWithMissingReferenceId
    );

    const error = cryptoApisWebhookSubscription.validateSync();
    expect(error).toBeInstanceOf(Error.ValidationError);
  });
});
