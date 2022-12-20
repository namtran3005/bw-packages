import {
  SolarisWebhookSubscriptionDoc,
  SolarisWebhookSubscription,
} from '@bitwala-cryptobank-squad/package-schemas';
import { SolarisWebhookSubscriptionModel } from '../model';

export const insertSubscription = (
  webhook: SolarisWebhookSubscription
): Promise<SolarisWebhookSubscriptionDoc> => {
  return SolarisWebhookSubscriptionModel.create(webhook);
};
