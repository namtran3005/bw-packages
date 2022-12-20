import {
  UpvestWebhookSubscription,
  UpvestWebhookSubscriptionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { UpvestWebhookSubscriptionModel } from '../model';

export const insertSubscription = (
  subscription: UpvestWebhookSubscription
): Promise<UpvestWebhookSubscriptionDoc> => {
  return UpvestWebhookSubscriptionModel.create(subscription);
};
