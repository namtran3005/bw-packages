/* eslint-disable @typescript-eslint/no-explicit-any */
import { Webhooks } from '../webhooks';
import { Protocol, Network } from '../types/eth';

const api = Object.freeze({
  post: jest.fn(),
  version: '1.0',
});

const network = Network.MAINNET;
const walletTransfersCallbackUrl = 'https://bitwala.com/callback';

const webhooks = new Webhooks({
  api,
  network,
  walletTransfersCallbackUrl,
} as any);

describe('Webhooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Webhooks.prototype.verifyHost', () => {
    it('should call post api with correct params', async () => {
      const host = 'https://bitwala.com';
      await webhooks.verifyHost(host);

      expect(api.post).toBeCalledWith('/tenancy/webhooks-verify/', {
        verify_url: host,
      });
    });
  });

  describe('Webhooks.prototype.subscribeToWalletTransfers', () => {
    it('should call post api with correct params', async () => {
      const walletAddress = '0x7bb2888ba637e40fac13d36de27d7d45b3e5ad66';
      const hmac = 'a-random-secret';
      await webhooks.subscribeToWalletTransfers(walletAddress, hmac);

      expect(api.post).toBeCalledWith('/tenancy/webhooks/', {
        url: walletTransfersCallbackUrl,
        hmac_secret_key: hmac,
        version: api.version,
        status: 'ACTIVE',
        event_filters: [
          {
            protocol_name: Protocol.ETHEREUM,
            event_noun: 'transfer',
            limit_to_application: false,
            wallet_address: walletAddress,
          },
        ],
      });
    });
  });

  describe('Webhooks.prototype.parseWebhookBody', () => {
    it('should parse Webhook Body', async () => {
      const body = {
        webhook_id: 'webhook_id',
        data: {
          quantity: 5,
          tx_hash: '',
        },
      };
      const res = await webhooks.parseWebhookBody(body);

      expect(res).toMatchObject({
        webhookId: 'webhook_id',
        data: {
          quantity: 5,
          txHash: '',
        },
      });
    });
  });
});
