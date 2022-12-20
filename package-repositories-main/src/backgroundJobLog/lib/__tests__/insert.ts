/* eslint-disable no-console */

import {
  BackgroundJobLogCallerModule,
  BackgroundJobLogEvent,
  BackgroundJobLogDomain,
} from '@bitwala-cryptobank-squad/package-schemas';
import { BackgroundJobLogModel } from '../../model';
import { insert } from '../insert';

const insertData = {
  event: BackgroundJobLogEvent.ABUY_ORDER_BTC_CUSTODY_EXEC_OK,
  callerModule: BackgroundJobLogCallerModule.AUTOBUY_NOTIFIER_LAMBDA,
  domain: BackgroundJobLogDomain.AUTOBUY_LOG_DOMAIN,
  owner: 'dummy-owner',
  itemId: 'dummy-domain-item-id',
};

const createdData = {
  ...insertData,
  createdAt: 'dummy-date',
  _id: 'dummy-id',
};

const stubInsert = jest
  .spyOn(BackgroundJobLogModel, 'create')
  .mockImplementation(() => createdData as any);

describe('Background Job log', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use create method', async () => {
    const res = await insert(insertData);
    expect(stubInsert).toBeCalledWith(insertData);
    expect(res).toBe(createdData);
  });
});
