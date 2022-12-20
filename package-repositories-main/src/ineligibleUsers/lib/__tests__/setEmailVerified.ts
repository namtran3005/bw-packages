/* eslint-disable @typescript-eslint/no-explicit-any */
import { setEmailVerified } from '../setEmailVerified';

import { IneligibleUserModel } from '../../model';

const mockId = 'mock_id';

const mockUpdateOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockUpdateOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('setEmailVerified fn', () => {
  beforeAll(() => {
    jest
      .spyOn(IneligibleUserModel, 'updateOne')
      .mockImplementation(() => mockUpdateOneVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should set emailVerified to true and return a promise', async () => {
    await setEmailVerified(mockId);
    expect(IneligibleUserModel.updateOne).toBeCalledWith(
      { _id: mockId },
      { $set: { emailVerified: true }, $unset: { verificationTokens: '' } }
    );
  });
});
