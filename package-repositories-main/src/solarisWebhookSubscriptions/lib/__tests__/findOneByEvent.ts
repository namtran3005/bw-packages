/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolarisWebhookSubscriptionModel } from '../../model';

import { findOneByEvent } from '../findOneByEvent';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find one by event method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisWebhookSubscriptionModel, 'findOne')
      .mockImplementation(() => mockQuery as any);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use model.findOne with lean and return a promise', () => {
    findOneByEvent('foo' as any);
    expect(SolarisWebhookSubscriptionModel.findOne).toBeCalledWith({
      eventType: 'foo',
    });
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
