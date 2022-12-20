import { SolarisWebhookSubscriptionModel } from '../../model';

import { findAll } from '../findAll';

const mockExec = jest.fn();
const mockLean = jest.fn(() => ({
  exec: mockExec,
}));

const mockQuery = {
  lean: mockLean,
};

describe('find all method', () => {
  beforeAll(() => {
    jest
      .spyOn(SolarisWebhookSubscriptionModel, 'find')
      .mockImplementation(() => mockQuery as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should use model.find with lean and return a promise', () => {
    findAll();
    expect(SolarisWebhookSubscriptionModel.find).toBeCalledWith({});
    expect(mockLean).toBeCalled();
    expect(mockExec).toBeCalled();
  });
});
