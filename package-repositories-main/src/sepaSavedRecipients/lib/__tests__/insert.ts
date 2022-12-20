import { SepaSavedRecipientModel } from '../../model';
import { insert } from '../insert';

const mockDoc = {
  createdAt: 'createdAt',
};

describe('insert', () => {
  beforeAll(() => {
    jest
      .spyOn(SepaSavedRecipientModel, 'create')
      .mockImplementation(() => Promise.resolve(mockDoc) as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method and return the promise', async () => {
    // eslint-disable-next-line
    const doc: any = {
      owner: 'ownerId',
      recipientName: 'recipientName',
      recipientIban: 'recipientIban',
    };
    const res = await insert(doc);
    expect(SepaSavedRecipientModel.create).toBeCalledWith(doc);
    expect(res).toBe(mockDoc);
  });
});
