import {
  CryptoApisWebhookSubscriptionDoc,
  cryptoApisWebhookSubscriptionSchema,
} from '@bitwala-cryptobank-squad/package-schemas';
import { mainConnection } from '../mainConnection';

export const CryptoApisWebhookSubscriptionModel = mainConnection.db.model<CryptoApisWebhookSubscriptionDoc>(
  'CryptoApisWebhookSubscription',
  cryptoApisWebhookSubscriptionSchema
);
