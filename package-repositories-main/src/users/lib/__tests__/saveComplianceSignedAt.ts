// tslint:disable no-any
import { saveComplianceSignedAt } from '../saveComplianceSignedAt';
import { UserModel } from '../../model';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

const mockDate = new Date('2018-05-05');
jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);
const RealDate = Date;

describe('save compliance signed at', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
    global.Date = RealDate;
  });

  it('should find one and update with lean and return a promise', async () => {
    const res = await saveComplianceSignedAt('userId');
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: 'userId' },
      { $set: { complianceSignedAt: mockDate } },
      { runValidators: true }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
