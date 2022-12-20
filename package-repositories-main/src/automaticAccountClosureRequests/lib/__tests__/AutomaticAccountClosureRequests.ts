/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AutomaticAccountClosureRequests
} from '@bitwala-cryptobank-squad/package-schemas';
import {
  AutomaticAccountClosureStatuses,
  AutomaticAccountClosureReason
}
  from '@bitwala-cryptobank-squad/package-solaris';
import { AutomaticAccountClosureRequestsModel } from '../../model';
import { upsertAutomaticAccountClosureRequests } from '../upsertAutomaticAccountClosureRequests';
import { findOne } from '../findOne';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

const mockDoc: AutomaticAccountClosureRequests = {
  isAcrRequestSuccessfull: false,
  solarisId: "f8d7fbbd587047a0aa449ce69d2d6c08acrq",
  closureReason: AutomaticAccountClosureReason.CUSTOMER_WISH,
  status: AutomaticAccountClosureStatuses.IN_PROGRESS,
  accountId: "5526853938474f3e92b22a03ea57a544cacc",
  technicalClosureDate: "2021-10-11",
  legalClosureDate: "2021-10-11",
  acrUpdatedAt: "2021-12-22T15:05:33.634+00:00",
  bookingsAssociated: false,
  openReservations: false
};
const mockDocForFind = {
  solarisId: 'solarisId',
  accountId: 'accountId',
  status: { $in: [AutomaticAccountClosureStatuses.INITIATED] }
};


describe('upsert automatic account closure requests', () => {
  beforeAll(() => {
    jest.spyOn(AutomaticAccountClosureRequestsModel, 'findOneAndUpdate').mockImplementation(() =>
    ({
      exec: mockExec,
    } as any));

    jest.spyOn(AutomaticAccountClosureRequestsModel, 'findOne').mockImplementation(() => mockQuery as any);

  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use model.findOneAndUpdate to insert a doc', () => {
    upsertAutomaticAccountClosureRequests(mockDoc as any);
    expect(AutomaticAccountClosureRequestsModel.findOneAndUpdate).toBeCalledWith(
      {
        solarisId: mockDoc.solarisId,
      },
      {
        $set: mockDoc,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );
    expect(mockExec).toBeCalledWith();
  });

  it('should use model.findOne to insert a doc', () => {

    findOne({ solarisId: 'solarisId', accountId: 'accountId', status: [AutomaticAccountClosureStatuses.INITIATED] });
    expect(AutomaticAccountClosureRequestsModel.findOne).toBeCalledWith(mockDocForFind);
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});

