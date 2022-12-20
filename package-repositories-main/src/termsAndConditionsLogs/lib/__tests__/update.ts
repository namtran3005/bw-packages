import { TermsAndConditionsEventType } from '@bitwala-cryptobank-squad/package-schemas';

import { update } from '../update';
import { TermsAndConditionsLogsModel } from '../../model';

describe('update', () => {
  const stubExec = jest.fn();
  const stubLean = jest.fn(() => ({ exec: stubExec }));
  const stubFindOne = { lean: stubLean };
  const spyFindOneAndUpdate = jest
    .spyOn(TermsAndConditionsLogsModel, 'findOneAndUpdate')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .mockImplementation(() => stubFindOne as any);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call findOneAndUpdate', () => {
    const dummySelector = {
      owner: 'dummy-user-id',
      documentId: 'dummy-document-id',
    };
    const dummyEvent = 'ACCEPTED' as TermsAndConditionsEventType;
    const dummyUpdateArg = { $set: { event: dummyEvent } };

    update(dummySelector.owner, dummySelector.documentId, dummyEvent);
    expect(spyFindOneAndUpdate).toBeCalledWith(dummySelector, dummyUpdateArg, {
      new: true,
      runValidators: true,
    });
  });
});
