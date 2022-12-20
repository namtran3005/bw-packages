/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PriceAlertType,
  TriggerType,
  PriceAlertStatus,
  Currency,
} from '@bitwala-cryptobank-squad/package-schemas';
import { fetchIds, PriceAlertQuery } from '../fetchIds';
import { PriceAlertsModel } from '../../model';

const mockExec = jest.fn(() => Promise.resolve(null));
const mockDistinct = jest.fn(() => ({ exec: mockExec }));
const mockQuery = {
  distinct: mockDistinct,
};

describe('fetchIds fn', () => {
  beforeAll(() => {
    jest.spyOn(PriceAlertsModel, 'find').mockImplementation(jest.fn());
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call find', async () => {
    jest
      .spyOn(PriceAlertsModel, 'find')
      .mockImplementation(() => mockQuery as any);

    const query: PriceAlertQuery = {
      currency: Currency.BTC,
      value: 9000,
      triggerTypes: [TriggerType.ABOVE],
      type: PriceAlertType.RELATIVE,
      status: PriceAlertStatus.ENABLED,
      activityInterval: { endHour: 12, startHour: 12 },
    };

    await fetchIds(query);
    expect(PriceAlertsModel.find).toBeCalled();
    expect(mockDistinct).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
