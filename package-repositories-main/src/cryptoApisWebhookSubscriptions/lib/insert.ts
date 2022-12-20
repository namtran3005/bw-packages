import {
  CryptoApisWebhookSubscription,
  CryptoApisWebhookSubscriptionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { CryptoApisWebhookSubscriptionModel } from '../model';

export const insert = (
  subscription: CryptoApisWebhookSubscription
): Promise<CryptoApisWebhookSubscriptionDoc> => {
  return CryptoApisWebhookSubscriptionModel.create(subscription);
};
