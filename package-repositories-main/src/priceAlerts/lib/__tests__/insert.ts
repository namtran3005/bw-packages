/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PriceAlertType,
  TriggerType,
  PriceAlert,
  PriceAlertStatus,
  Currency,
} from '@bitwala-cryptobank-squad/package-schemas';
import { insert } from '../insert';

import { PriceAlertsModel } from '../../model';

const mockResponse = [] as any;
const mockExec = jest.fn(() => Promise.resolve(mockResponse));
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  lean: mockLean,
};

const priceAlert: PriceAlert = {
  value: 0.05,
  triggerType: TriggerType.ABOVE,
  type: PriceAlertType.ABSOLUTE,
  currency: Currency.BTC,
  userId: '5b3254988461ad005bd17907',
  status: PriceAlertStatus.ENABLED,
  activityInterval: { endHour: 12, startHour: 12 },
};

describe('insert fn', () => {
  beforeAll(() => {
    jest.spyOn(PriceAlertsModel, 'create').mockImplementation(jest.fn());
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call create', async () => {
    jest
      .spyOn(PriceAlertsModel, 'find')
      .mockImplementation(() => mockQuery as any);

    await insert(priceAlert as any);
    expect(PriceAlertsModel.create).toBeCalledWith(priceAlert);
  });
});
