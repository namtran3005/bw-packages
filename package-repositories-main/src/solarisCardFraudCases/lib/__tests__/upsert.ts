/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisCardFraudCaseModel } from '../../model';

import { upsert } from '../upsert';

const mockFindOneAndUpdateVal: any = {
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('upsert (upsert a card fraud case)', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisCardFraudCaseModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should use findOneAndUpdate method and return the promise', async () => {
    const doc = { foo: 'bar' };
    const res = await upsert(doc as any);
    expect(SolarisCardFraudCaseModel.findOneAndUpdate).toBeCalledWith(
      {
        solarisId: undefined,
      },
      {
        $set: doc,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
