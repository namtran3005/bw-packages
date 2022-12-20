import { TermsAndConditionsEventType } from '@bitwala-cryptobank-squad/package-schemas';

import { insert } from '../insert';
import { TermsAndConditionsLogsModel } from '../../model';

describe('insert', () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyCreate = jest
    .spyOn(TermsAndConditionsLogsModel, 'create')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call create', () => {
    const dummyId = 'dummy-user-id';
    const dummyEvent = 'ACCEPTED' as TermsAndConditionsEventType;
    const dummyDocumentId = 'dummy-document-id';

    insert(dummyId, dummyEvent, dummyDocumentId);
    expect(spyCreate).toBeCalledWith({
      owner: dummyId,
      event: dummyEvent,
      documentId: dummyDocumentId,
    });
  });
});
