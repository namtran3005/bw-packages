import { SolarisMobileNumberModel } from '../../model';
import { findSolarisMobileNumberByOwner } from '../findSolarisMobileNumberByOwner';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find mobile number by owner method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisMobileNumberModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne with lean and return a promise', () => {
    findSolarisMobileNumberByOwner('owner');
    expect(SolarisMobileNumberModel.findOne).toBeCalledWith({ owner: 'owner' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
