/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisIdentificationModel } from '../../model';
import { mergeFetchedData } from '../mergeFetchedData';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('mergeFetchedData', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisIdentificationModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should find one and update with lean and return a promise', async () => {
    const data: any = { foo: 'bar' };
    const res = await mergeFetchedData('accountId', data);
    expect(SolarisIdentificationModel.findOneAndUpdate).toBeCalledWith(
      { solarisId: 'accountId' },
      { $set: data },
      { new: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
