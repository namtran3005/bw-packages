/* eslint-disable @typescript-eslint/no-explicit-any*/

import { createHmac } from 'crypto';
import humps from 'humps';
import rename from 'deep-rename-keys-ts';

import { idMapper } from '../../client';
import {
  EventType,
  SolarisWebhookCreationResponse,
  SolarisWebhook,
} from '../../types/entities/lib/webhooks';
import { PaginationParams } from '../../types/api/pagination';
import { Errors } from '../../errors';

import { Handler } from '../handler';

export class WebhooksHandler extends Handler {
  public parseWebhookBody(payload: any): any {
    return humps.camelizeKeys(rename(payload, idMapper));
  }

  public verifySignature(
    algo: string,
    content: string,
    secret: string,
    signature: string
  ): void {
    const expectedSignature = createHmac(algo, secret)
      .update(content)
      .digest('hex');

    if (expectedSignature !== signature) {
      throw new Error(Errors.INVALID_WEBHOOK_SIGNATURE);
    }
  }

  public async create(
    eventType: EventType,
    url: string
  ): Promise<SolarisWebhookCreationResponse> {
    return this.client.post({ url: '/webhooks', data: { eventType, url } });
  }

  public async getOne(id: string): Promise<SolarisWebhook> {
    return this.client.get({ url: `/webhooks/${id}` });
  }

  public async list(params?: PaginationParams): Promise<SolarisWebhook[]> {
    return this.client.get({
      url: '/webhooks',
      params,
    });
  }

  public async delete(id: string): Promise<void> {
    return this.client.delete({ url: `/webhooks/${id}` });
  }
}
