import {
  BitgoWebhookSubscriptionDoc,
  bitgoWebhookSubscriptionSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const BitgoWebhookSubscriptionModel = mainConnection.db.model<
  BitgoWebhookSubscriptionDoc
>('BitgoWebhookSubscription', bitgoWebhookSubscriptionSchema);
