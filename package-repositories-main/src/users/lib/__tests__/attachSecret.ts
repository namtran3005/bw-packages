/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from 'crypto';
import { attachSecret } from '../attachSecret';

const mockBytes = {
  toString: jest.fn().mockImplementation(() => 'pseudorandom hex string'),
};

import { UserModel } from '../../model';

const mockUpdateVal: any = {
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('attachPersonId fn', () => {
  beforeAll(() => {
    jest.spyOn(UserModel, 'update').mockImplementation(() => mockUpdateVal);
    jest.spyOn(crypto, 'randomBytes').mockImplementation(() => mockBytes);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should update user by id', async () => {
    const res = await attachSecret('userId');
    expect(UserModel.update).toBeCalledWith(
      { _id: 'userId', clientSecret: { $exists: false } },
      { $set: { clientSecret: 'pseudorandom hex string' } }
    );
    expect(mockUpdateVal.exec).toBeCalled();
    expect(crypto.randomBytes).toBeCalledWith(8);
    expect(mockBytes.toString).toBeCalledWith('hex');
    expect(res).toBe('EXEC');
  });
});
