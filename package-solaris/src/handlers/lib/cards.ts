import {
  Card,
  CardInput,
  CardLimitsType,
  CardLimitsDescriptor,
} from '../../types/entities/lib/cards';
import { ChangeRequest } from '../../types/entities/lib/changeRequests';

import { Handler } from '../handler';
import { PaginationParams } from '../..';

import {
  cardInputSchema,
  cardLimitsInputShape,
} from '../../validations/schemas/cards';

const limitsPathsMap: { [key: string]: string } = {
  [CardLimitsType.CARD_PRESENT]: 'card_present',
  [CardLimitsType.CARD_NOT_PRESENT]: 'card_not_present',
};

const limitsValidatorsMap = {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  [CardLimitsType.CARD_PRESENT]: cardLimitsInputShape.cardPresent!.required(),
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  [CardLimitsType.CARD_NOT_PRESENT]: cardLimitsInputShape.cardNotPresent!.required(),
};

export class CardsHandler extends Handler {
  public create(
    personId: string,
    accountId: string,
    payload: CardInput
  ): Promise<Card> {
    cardInputSchema.validateSync(payload);
    return this.client.post({
      url: `/persons/${personId}/accounts/${accountId}/cards`,
      data: payload,
    });
  }

  public activate(cardId: string, verificationToken: string): Promise<Card> {
    return this.client.post({
      url: `/cards/${cardId}/activate`,
      data: { verificationToken },
    });
  }
  public activateWithoutToken(cardId: string): Promise<Card> {
    return this.client.post({
      url: `/cards/${cardId}/activate`,
      data: {}
    });
  }

  public getOne(cardId: string): Promise<Card> {
    return this.client.get({ url: `/cards/${cardId}` });
  }

  public listByAccount(
    accountId: string,
    params?: PaginationParams
  ): Promise<Card[]> {
    return this.client.get({ url: `/accounts/${accountId}/cards`, params });
  }

  public listByBusiness(
    businessId: string,
    params?: PaginationParams
  ): Promise<Card[]> {
    return this.client.get({ url: `/businesses/${businessId}/cards`, params });
  }

  public block(cardId: string): Promise<Card> {
    return this.client.post({ url: `/cards/${cardId}/block` });
  }

  public unblock(cardId: string): Promise<Card> {
    return this.client.post({ url: `/cards/${cardId}/unblock` });
  }

  public changePin(cardId: string, pin: string): Promise<ChangeRequest> {
    return this.client.post({
      url: `/cards/${cardId}/change_pin`,
      data: { pin },
    });
  }

  public close(cardId: string): Promise<Card> {
    return this.client.post({ url: `/cards/${cardId}/close` });
  }

  public getLimits(
    cardId: string,
    limitsType: CardLimitsType
  ): Promise<CardLimitsDescriptor> {
    return this.client.get({
      url: `/cards/${cardId}/limits/${limitsPathsMap[limitsType]}`,
    });
  }

  public setLimits(
    cardId: string,
    limitsType: CardLimitsType,
    limits: CardLimitsDescriptor
  ): Promise<CardLimitsDescriptor> {
    limitsValidatorsMap[limitsType].validateSync(limits);
    return this.client.put({
      url: `/cards/${cardId}/limits/${limitsPathsMap[limitsType]}`,
      data: limits,
    });
  }
}
