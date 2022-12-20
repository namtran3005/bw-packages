/* eslint-disable @typescript-eslint/no-explicit-any */
import { insertNotification } from '../insertNotification';

import { NotificationsModel } from '../../model';

describe('insertNotification fn', () => {
  beforeAll(() => {
    jest.spyOn(NotificationsModel, 'create').mockImplementation(jest.fn());
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should call create', async () => {
    const notification = {
      userId: 'foo',
      event: 'SIGNUP',
      email: true,
      push: true,
      variables: {
        something: 'foo',
        somethingElse: 'bar',
      },
    };

    await insertNotification(notification);
    expect(NotificationsModel.create).toBeCalledWith(notification);
  });
});
