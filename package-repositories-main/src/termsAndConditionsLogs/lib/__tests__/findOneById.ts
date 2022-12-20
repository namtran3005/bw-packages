import { findOneById } from '../findOneById';
import { TermsAndConditionsLogsModel } from '../../model';

describe('findById', () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyFindOne = jest
    .spyOn(TermsAndConditionsLogsModel, 'findOne')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use findOne', async () => {
    const dummyDocumentId = 'dummy-document-id';
    const dummyOwnerId = 'dummy-owner-id';

    await findOneById(dummyDocumentId, dummyOwnerId);

    expect(spyFindOne).toBeCalledWith({
      documentId: dummyDocumentId,
      owner: dummyOwnerId,
    });
    expect(stubLean).toBeCalled();
    expect(stubExec).toBeCalled();
  });
});
