import { findOneById } from '../findOneById';
import { SepaSavedRecipientModel } from '../../model';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('Get a recipient for given id', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaSavedRecipientModel, 'findOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use find with lean and return a promise', () => {
    findOneById('id');
    expect(SepaSavedRecipientModel.findOne).toBeCalledWith({ _id: 'id' });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
