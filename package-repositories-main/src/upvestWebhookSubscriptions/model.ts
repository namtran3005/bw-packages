import {
  UpvestWebhookSubscriptionDoc,
  upvestWebhookSubscriptionSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const UpvestWebhookSubscriptionModel = mainConnection.db.model<
  UpvestWebhookSubscriptionDoc
>('UpvestWebhookSubscription', upvestWebhookSubscriptionSchema);
