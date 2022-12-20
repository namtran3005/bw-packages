/* eslint-disable @typescript-eslint/no-explicit-any */
import { TradingWebhookLogModel } from '../../model';

import { insertWebhookLog } from '../insertWebhookLog';

const mockDoc = {
  solarisId: 'solarisId',
};

describe('insert webhook log method', () => {
  beforeAll(() => {
    jest.spyOn(TradingWebhookLogModel, 'create').mockImplementation(x => x);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use model.create to insert a doc', () => {
    const res = insertWebhookLog(mockDoc as any);
    expect(TradingWebhookLogModel.create).toBeCalledWith(mockDoc);
    expect(res).toBe(mockDoc);
  });
});
