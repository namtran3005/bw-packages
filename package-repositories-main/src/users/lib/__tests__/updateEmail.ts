/* eslint-disable @typescript-eslint/no-explicit-any */
import { EmailChangeReason } from '@bitwala-cryptobank-squad/package-schemas';
import { updateEmail } from '../updateEmail';
import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockUserId = 'user_id';
const mockNewEmail = 'new@email.com';
const mockDate = new Date('2018-05-05');
const mockOldEMail = {
  address: 'old@email.com',
  changeReason: EmailChangeReason.CHANGED_BY_SOLARIS,
  when: mockDate,
};

describe('updateEmail fn', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call UserModel.findOneAndUpdate with correct payload', async () => {
    const res = await updateEmail(mockUserId, mockNewEmail, mockOldEMail);
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: mockUserId },
      {
        $set: { emails: [{ address: mockNewEmail, verified: true }] },
        $push: { emailsOld: mockOldEMail },
      },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
