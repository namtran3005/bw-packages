/* eslint-disable @typescript-eslint/no-explicit-any */
import { PriceAlertStatus } from '@bitwala-cryptobank-squad/package-schemas';
import { changeStatus } from '../changeStatus';
import { PriceAlertsModel } from '../../model';

const mockExec = jest.fn(() => Promise.resolve(null));
const mockLean = jest.fn(() => ({ exec: mockExec }));
const mockQuery = { lean: mockLean };

describe('changeStatus fn', () => {
  beforeAll(() => {
    jest
      .spyOn(PriceAlertsModel, 'findOneAndUpdate')
      .mockImplementation(jest.fn());
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call findOneAndUpdate', async () => {
    jest
      .spyOn(PriceAlertsModel, 'updateMany')
      .mockImplementation(() => mockQuery as any);

    const query = {
      ids: ['asdf1234'],
      notificationId: 'xyz098',
      status: PriceAlertStatus.DISABLED,
    };

    await changeStatus(query);
    expect(PriceAlertsModel.updateMany).toBeCalled();
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
