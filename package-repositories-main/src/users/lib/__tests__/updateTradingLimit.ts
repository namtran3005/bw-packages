import { UserModel } from '../../model';
import { updateTradingLimit } from '../updateTradingLimit';

const mockFindOneAndUpdateVal: any = {
  lean: jest.fn().mockImplementation(() => mockFindOneAndUpdateVal),
  exec: jest.fn().mockImplementation(() => Promise.resolve('EXEC')),
};

describe('updateTradingLimit fn', () => {
  beforeAll(() => {
    jest
      .spyOn(UserModel, 'findOneAndUpdate')
      .mockImplementation(() => mockFindOneAndUpdateVal);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call UserModel.findOneAndUpdate with correct payload', async () => {
    const res = await updateTradingLimit('123', 15000);
    expect(UserModel.findOneAndUpdate).toBeCalledWith(
      { _id: '123' },
      { $set: { tradingLimit: 15000 } }
    );
    expect(mockFindOneAndUpdateVal.lean).toBeCalled();
    expect(mockFindOneAndUpdateVal.exec).toBeCalled();
    expect(res).toBe('EXEC');
  });
});
