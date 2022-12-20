import { findAll } from '../findAll';
import { TermsAndConditionsLogsModel } from '../../model';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find all method', () => {
  beforeAll(() => {
    jest
      .spyOn(TermsAndConditionsLogsModel, 'find')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use model.find with lean and return a promise', () => {
    const dummyOwner = 'dummy-owner';
    findAll(dummyOwner);
    expect(TermsAndConditionsLogsModel.find).toBeCalledWith({
      owner: dummyOwner,
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
