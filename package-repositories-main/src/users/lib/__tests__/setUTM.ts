/* eslint-disable @typescript-eslint/no-explicit-any */
import { UtmConfig, ReferrerType } from '@bitwala-cryptobank-squad/package-schemas';
import { setUTM } from '../setUTM';

import { UserModel } from '../../model';

const mockUTM: UtmConfig = {
  name: 'name',
  content: 'content',
  source: 'source',
  medium: 'medium',
  term: 'term',
  clickId: 'click id',
  referrerType: ReferrerType.IMPACT_RADIUS,
};

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('setUTM fn', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
    jest
      .spyOn(global, 'Date')
      .mockImplementationOnce(
        () => new Date('2019-05-14T11:01:58.135Z') as any
      );
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should find one and update with lean and return a promise', async () => {
    const res = await setUTM('userId', mockUTM);
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      { $set: { utm: { ...mockUTM, when: new Date() } } },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
