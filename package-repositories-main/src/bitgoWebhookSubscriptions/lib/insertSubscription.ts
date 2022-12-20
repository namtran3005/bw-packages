import {
  BitgoWebhookSubscriptionInput,
  BitgoWebhookSubscriptionDoc,
} from '@bitwala-cryptobank-squad/package-schemas';
import { BitgoWebhookSubscriptionModel } from '../model';

export const insertSubscription = (
  subscription: BitgoWebhookSubscriptionInput
): Promise<BitgoWebhookSubscriptionDoc> => {
  return BitgoWebhookSubscriptionModel.create(subscription);
};
