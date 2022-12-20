import { SepaScheduledTransactionEventStatus } from '@bitwala-cryptobank-squad/package-solaris';
import { StandingOrderBuyNotificationsModel } from '../../model';
import { findByTransactionId } from '../findByTransactionId';

const mockTransactionId = 'transactionId';

const mockExec = jest.fn().mockImplementation(() => Promise.resolve());
const mockLean = jest.fn().mockImplementation(() => ({
  exec: mockExec,
}));
const mockQuery = {
  lean: mockLean,
};

describe('findByTransactionId', () => {
  beforeAll(() => {
    jest
      .spyOn(StandingOrderBuyNotificationsModel, 'find')
      .mockImplementation(() => mockQuery as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('finds documents only by transactionId', () => {
    findByTransactionId(mockTransactionId);
    expect(StandingOrderBuyNotificationsModel.find).toHaveBeenCalledTimes(1);
    expect(StandingOrderBuyNotificationsModel.find).toHaveBeenCalledWith({
      transactionId: mockTransactionId,
      status: { $in: Object.values(SepaScheduledTransactionEventStatus) },
    });
    expect(mockLean).toBeCalledWith();
    expect(mockExec).toBeCalledWith();
  });

  test.each(Object.values(SepaScheduledTransactionEventStatus))(
    'it finds documents by transactionId and status',
    (status) => {
      findByTransactionId(mockTransactionId, status);
      expect(StandingOrderBuyNotificationsModel.find).toHaveBeenCalledTimes(1);
      expect(StandingOrderBuyNotificationsModel.find).toHaveBeenCalledWith({
        transactionId: mockTransactionId,
        status,
      });
      expect(mockLean).toBeCalledWith();
      expect(mockExec).toBeCalledWith();
    }
  );
});
