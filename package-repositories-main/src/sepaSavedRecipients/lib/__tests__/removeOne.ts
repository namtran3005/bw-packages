import { removeOneById } from '../removeOneById';
import { SepaSavedRecipientModel } from '../../model';

const mockExec = jest.fn();
const mockQuery = { exec: mockExec };

describe('Remove a recipient', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaSavedRecipientModel, 'deleteOne')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use deleteOne method', () => {
    removeOneById('recipientId');
    expect(SepaSavedRecipientModel.deleteOne).toBeCalledWith({
      _id: 'recipientId',
    });
    expect(mockExec).toBeCalled();
  });
});
