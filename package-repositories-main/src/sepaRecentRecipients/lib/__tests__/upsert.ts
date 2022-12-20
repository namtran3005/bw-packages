/* eslint-disable @typescript-eslint/no-explicit-any */
import { SepaRecentRecipientModel } from '../../model';
import { upsert } from '../upsert';

const mockOwner = 'userid';
const mockName = 'recipientName';
const mockIban = 'recipientIban';
const mockLastTransactionDate = new Date('2020-06-05');

const mockExec = jest.fn();

describe('upsertmethod', () => {
  beforeAll(() => {
    jest.spyOn(SepaRecentRecipientModel, 'findOneAndUpdate').mockImplementation(
      () =>
        ({
          exec: mockExec,
        } as any)
    );
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call findOneAndUpdate by id, replace the new LastTransactionDate, and set the params', () => {
    upsert(mockOwner, mockName, mockIban, mockLastTransactionDate);
    expect(SepaRecentRecipientModel.findOneAndUpdate).toBeCalledWith(
      {
        owner: mockOwner,
        iban: mockIban,
      },
      {
        $set: {
          owner: mockOwner,
          name: mockName,
          iban: mockIban,
          lastTransactionAt: mockLastTransactionDate,
        },
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
});
