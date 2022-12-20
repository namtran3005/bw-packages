import { removeOneById } from '../removeOneById';
import { SepaRecentRecipientModel } from '../../model';

const mockExec = jest.fn();
const mockQuery = { exec: mockExec };

describe('Remove a recent recipient', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaRecentRecipientModel, 'deleteOne')
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
    expect(SepaRecentRecipientModel.deleteOne).toBeCalledWith({
      _id: 'recipientId',
    });
    expect(mockExec).toBeCalled();
  });
});
