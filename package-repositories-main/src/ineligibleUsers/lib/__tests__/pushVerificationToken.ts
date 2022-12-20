/* eslint-disable @typescript-eslint/no-explicit-any */
import { pushVerificationToken } from '../pushVerificationToken';

import { IneligibleUserModel } from '../../model';

const mockEmail = 'qwe@qwe.qwe';
const mockTokenObj = {
  token: 'token',
  when: new Date('2017-11-20 14:04:01.650Z'),
};
const mockUpdateOneVal: any = {
  lean: jest.fn().mockImplementation(() => mockUpdateOneVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('pushVerificationToken fn', () => {
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

  it('should push token and return a promise', async () => {
    await pushVerificationToken(mockEmail, mockTokenObj);
    expect(IneligibleUserModel.updateOne).toBeCalledWith(
      { email: mockEmail },
      { $push: { verificationTokens: mockTokenObj } }
    );
  });
});
