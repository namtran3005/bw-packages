/* eslint-disable @typescript-eslint/no-explicit-any */
import { StandingOrdersModel } from '../../model';

import { insertStandingOrder } from '../insertStandingOrder';

const mockDoc = {
  createdAt: 'createdAt',
};

describe('insertStandingOrder', () => {
  beforeAll(() => {
    jest
      .spyOn(StandingOrdersModel, 'create')
      .mockImplementation(() => Promise.resolve(mockDoc) as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method and return the promise', async () => {
    const doc = { foo: 'bar' };
    const res = await insertStandingOrder(doc as any);
    expect(StandingOrdersModel.create).toBeCalledWith(doc);
    expect(res).toBe(mockDoc);
  });
});
